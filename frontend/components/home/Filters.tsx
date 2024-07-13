"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import client from "@/sanityClient";

interface Category {
  id: number;
  attributes: {
    name: string;
  };
}

const BACKEND_URL = "https://vikas-saini-blog.onrender.com";

const Filters = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    const query = `*[_type == "category"]{name}`;
    const res = await client.fetch(query);
    setCategories(res);
    console.log(res);
  };
  // const fetchCategories = async () => {
  //   const url = `${BACKEND_URL}/api/categories?populate=*`;
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`An error has occurred: ${response.status}`);
  //     }
  //     const result = await response.json();
  //     setCategories(result.data);
  //     // console.log(result.data);
  //     return;
  //   } catch (error) {
  //     console.error("Fetching error:", error);
  //   }
  // };

  useEffect(() => {
    //   fetchCategories();
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
      <Input
        placeholder="Search"
        className="lg:w-1/3 rounded-full px-6 mb-4 lg:mb-0"
      />
      <div className="flex items-center gap-4 flex-wrap">
        {categories?.map((item: any) => (
          <Link href={`/posts/category/${item.id}`}>
            <span
              className="text-xs h-10 bg-gray-100 rounded-full flex items-center px-6"
              key={item.id}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Filters;
