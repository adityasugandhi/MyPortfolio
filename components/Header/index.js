import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {FloatingNav} from "../ui/navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Button from "../Button";
import Image from "next/image";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog ,navItems}) => {
  const router = useRouter();
  const { resolvedTheme, theme, setTheme } = useTheme();
  
  const [mounted, setMounted] = useState(false);
  const { name, showBlog, showResume } = data;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollY > 0);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div>
      
      <FloatingNav navItems={navItems} />
    </div>
      )};
export default Header;
