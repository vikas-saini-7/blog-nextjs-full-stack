"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import client from "@/sanityClient";
import axios from "axios";
import CategoriesSkeleton from "../skeletons/CategoriesSkeleton";

interface Category {
  _id: number;
  attributes: {
    name: string;
  };
}

const BACKEND_URL = "https://blog-nextjs-backend.onrender.com";
// const BACKEND_URL = "http://localhost:8000";

const Filters = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  const fetchCategories = async () => {
    const url = `${BACKEND_URL}/api/categories`;
    try {
      setLoading(true);
      const response = await axios.get(url);
      if (response.status === 200) {
        setCategories(response.data.results);
        setLoading(false);
      }
    } catch (error) {
      console.error("Fetching error:", error);
      setLoading(false);
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
        {loading && (
          <>
            <CategoriesSkeleton />
            <CategoriesSkeleton />
            <CategoriesSkeleton />
            <CategoriesSkeleton />
          </>
        )}
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
