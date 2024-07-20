import { IconHome, IconHome2, IconMenu } from "@tabler/icons-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="border-r h-full bg-white px-4 lg:px-8">
      <ul className="mt-4 lg:mt-8">
        {/* <li className="hover:bg-gray-100 py-2 px-5 text-sm rounded-md">
          <IconMenu />
        </li> */}
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
