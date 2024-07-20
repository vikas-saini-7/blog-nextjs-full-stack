import {
  IconExternalLink,
  IconHome,
  IconHome2,
  IconLink,
  IconMenu,
} from "@tabler/icons-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="border-r h-full bg-white px-4 lg:px-8">
      <ul className="mt-4 lg:mt-8">
        <Link href={"/"} target="_blank">
          <li className="hover:bg-gray-100 py-2 px-5 text-[12px] rounded-md flex items-center gap-2 text-purple-700">
            VIKAS SAINI BLOG <IconExternalLink size={14} />
          </li>
        </Link>
        <Link href={"/admin/dashboard"}>
          <li className="hover:bg-gray-100 py-2 px-5 text-sm rounded-md">
            Dashboard
          </li>
        </Link>
        <Link href={"/admin/posts"}>
          <li className="hover:bg-gray-100 py-2 px-5 text-sm rounded-md">
            posts
          </li>
        </Link>
        <Link href={"/admin/categories"}>
          <li className="hover:bg-gray-100 py-2 px-5 text-sm rounded-md">
            categories
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
