"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogPostsTable from "@/components/admin/BlogPostTable";
import Link from "next/link";

const page = () => {
  return (
    <div className="p-4">
      <div className="bg-white px-4 py-2 rounded-md flex items-center justify-between">
        <p>filters and actions</p>
        <Link href="/admin/posts/new">
          <Button className="" variant={"outline"}>
            New Post
          </Button>
        </Link>
      </div>
      <BlogPostsTable />
    </div>
  );
};

export default page;
