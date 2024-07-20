"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import client from "@/sanityClient";
import axios from "axios";

interface Category {
  _id: number;
  attributes: {
    name: string;
  };
}

const BACKEND_URL = "http://localhost:8000";

const Filters = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    const url = `${BACKEND_URL}/api/categories`;
    try {
      const response = await axios.get(url);
      setCategories(response.data.results);
      console.log(response.data.results);
      return;
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };

  useEffect(() => {
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
          <Link key={item?._id} href={`/posts/category/${item?._id}`}>
            <span className="text-xs h-10 bg-gray-100 rounded-full flex items-center px-6">
              {item?.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Filters;
