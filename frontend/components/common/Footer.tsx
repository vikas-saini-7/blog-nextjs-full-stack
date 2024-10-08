"use client";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCopyright,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  if (pathname.includes("/admin")) {
    return;
  }
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto flex flex-col gap-8 text-center md:text-left md:flex-row items-center justify-between p-12">
        <div>
          <h1
            style={{ letterSpacing: "1px" }}
            className="-mb-2 font-medium text-4xl font-primary uppercase"
          >
            Vikas Saini blog
          </h1>
          <p className="uppercase text-xs">Design | Tech | Marketing</p>
        </div>
        <div className="grid grid-cols-2 gap-2 gap-x-8">
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/sitemap"}>Sitemap</Link>
        </div>
        <div className="flex gap-4">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/vikas-saini-602b96227"
          >
            <IconBrandLinkedin size={32} />
          </a>
          <a target="_blank" href="https://x.com/vikas_saini_dev">
            <IconBrandTwitter size={32} />
          </a>
          <a target="_blank" href="https://github.com/vikas-saini-7">
            <IconBrandGithub size={32} />
          </a>
        </div>
      </div>
      <div className="container mx-auto border-t border-gray-500 flex items-center justify-between p-4">
        <p className="text-xs uppercase flex items-center gap-1">
          <IconCopyright size={16} /> vikas saini blog 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
