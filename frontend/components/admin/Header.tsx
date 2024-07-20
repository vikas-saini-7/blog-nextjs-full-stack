"use client";
import React from "react";
import { IconBell, IconMenu2 } from "@tabler/icons-react";
import { Button } from "../ui/button";
const Header = () => {
  return (
    <header className="py-3 border-b bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1
            style={{ letterSpacing: "1px" }}
            className="-mb-2 font-medium text-2xl font-primary uppercase"
          >
            Vikas Saini Blog
          </h1>
        </div>
        <div className="flex items-center gap-4 lg:gap-8">
          <IconBell />
          <Button className="rounded-xl hidden md:flex">img</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
