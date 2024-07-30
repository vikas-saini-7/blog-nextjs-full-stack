import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

export function ProfileDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <img
          className="w-10 h-10 rounded-full cursor-pointer"
          src="https://imgcdn.stablediffusionweb.com/2024/5/2/81328692-c85f-4e08-9c01-f8f9f49fb291.jpg"
          alt=""
        />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            {/* <DrawerTitle>Who Am I?</DrawerTitle> */}
            <div className="flex items-center mb-4 gap-8 mt-4">
              <img
                className="h-[90px] rounded-full"
                src="https://vikas-saini.vercel.app/images/profile.webp"
                alt=""
              />
              <h1 className="text-2xl font-semibold">
                Front-End React Developer
              </h1>
            </div>
            <DrawerDescription>
              Hey, my name is Vikas, and I'm a Frontend Developer. My passion is
              to create and develop a clean UI/UX for my users. My main stack
              currently is React/Next.js in combination with Tailwind CSS and
              TypeScript.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <a target="_blank" href="https://www.linkedin.com/in/vikas-saini-602b96227">
              <Button className="w-full">
                Contact &nbsp; <IconBrandLinkedin />
              </Button>
            </a>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
