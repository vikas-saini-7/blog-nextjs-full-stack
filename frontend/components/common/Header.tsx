"use client";
import { IconBell, IconBrandLinkedin, IconMenu2 } from "@tabler/icons-react";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { ProfileDrawer } from "./ProfileDrawer";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname.includes("/admin")) {
    return;
  }
  return (
    <header className="py-3 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div
          className="cursor-pointer"
          onClick={() => {
            alert("Coming Soon");
          }}
        >
          <IconMenu2 />
        </div>
        <Link href={"/"}>
          <h1
            style={{ letterSpacing: "1px" }}
            className="-mb-2 font-medium text-2xl md:text-4xl font-primary uppercase"
          >
            Vikas Saini blog
          </h1>
        </Link>
        <div className="flex items-center gap-4 lg:gap-8">
          <IconBell />
          <div className="p-1 border rounded-full md:block ">
            <ProfileDrawer />
          </div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/vikas-saini-602b96227"
          >
            <Button className="rounded-xl hidden md:flex">
              <span className="mr-2">Follow Me</span>
              <IconBrandLinkedin size={18} />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
