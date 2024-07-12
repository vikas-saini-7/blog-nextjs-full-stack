import {
  IconBell,
  IconBrandLinkedin,
  IconMenu2,
} from "@tabler/icons-react";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="py-3 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <IconMenu2 />
        </div>
        <h1
          style={{ letterSpacing: "1px" }}
          className="-mb-2 font-medium text-4xl font-primary uppercase"
        >
          Vikas Saini blog
        </h1>
        <div className="flex items-center gap-4 lg:gap-8">
          <IconBell />
          <div className="p-1 border rounded-full md:block hidden">
            <img
              className="w-10 h-10 rounded-full"
              src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
              alt=""
            />
          </div>
          <Button className="rounded-xl hidden md:flex">
            <span className="mr-2">Follow Me</span>
            <IconBrandLinkedin size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
