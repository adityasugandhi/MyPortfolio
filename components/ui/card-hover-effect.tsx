import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes"; 
import YouTube from 'react-youtube';
import { ButtonsCard } from "./tailwindcss-buttons";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: string;
    title: string;
    description: string;
    url?: string;
    imageSrc?: string;
    youtubeId?: string;
    Docs?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={cn(
        "grid h-fit w-fit grid-cols-4 tablet:grid-cols-2 mob:grid-cols-2 desktop:grid-cols-3 py-5",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.url || idx.toString()}
          className="relative group block p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={`absolute inset-0 h-full w-full ${
                  resolvedTheme === "dark" ? "bg-gray-700" : "bg-gray-300"
                } block rounded-2xl`}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div>
            <Card theme={resolvedTheme} {...item}>
              <CardTitle theme={resolvedTheme}>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <div className="flex justify-end">
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-3 mobile:p-1 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear mr-2"
                  >
                    Learn More
                  </a>
                )}
                {item.Docs && (
                  <a
                    href={item.Docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] py-2 px-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear"
                  >
                    Docs
                  </a>
                )}
              </div>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  imageSrc,
  youtubeId,
  theme,
}: {
  className?: string;
  children: React.ReactNode;
  imageSrc?: string;
  youtubeId?: string;
  theme: string;
}) => {
  return (
    <div
      className={cn(
        `rounded-2xl h-full overflow-hidden group-hover:border-slate-600 relative z-20`,
        {
          'bg-black': theme === 'dark',
          'bg-white-100': theme !== 'dark',
          'bg-opacity-50': theme !== 'dark',
        },
        className
      )}
    >
      {youtubeId ? (
        <div className="relative h-0 pb-9/16">
          <YouTube
            videoId={youtubeId}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      ) : imageSrc ? (
        <div className="mb-4 justify-center p-2">
          <Image
            src={imageSrc}
            alt=""
            className="w-50 h-50 rounded-2xl"
            width={1024}
            height={1024}
            priority={true}
          />
        </div>
      ) : null}
      <div className="relative z-50">
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
  theme,
}: {
  className?: string;
  children: React.ReactNode;
  theme: string;
}) => {
  return (
    <h4 className={cn(`font-bold laptop:text-3xl tablet:text-l mobile:text-m tracking-wide mt-2`, className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
  learnMoreLink,
}: {
  className?: string;
  children: React.ReactNode;
  learnMoreLink?: string;
}) => {
  return (
    <div className="relative py-1">
      <p
        className={cn(
          "my-8 text-black-50 opacity-60 hover:opacity-100 transition-opacity ease-in-out duration-300 tracking-wide leading-relaxed desktop:text-xl mob:text-md tablet:text-m",
          className
        )}
      >
        {children}
      </p>
    </div>
  );
};
