"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@utils/cn";
import Link from "next/link";
import { useRouter } from "next/router";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    scrollHandler?: () => void;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.01) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const handleClick = (e, scrollHandler) => {
    if (scrollHandler) {
      e.preventDefault();
      scrollHandler();
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit inset-x-2 mx-auto fixed border-white rounded-full dark:bg-black backdrop-blur-lg bg-slate-400/30 opacity-20 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 p-5 items-center justify-center space-x-20",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            passHref
            onClick={(e) => handleClick(e, navItem.scrollHandler)}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-2  hover:text-blue-400"
            )}
          >
            <span className="block sm:hidden">{navItem.name}</span> 
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
