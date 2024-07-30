"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BACKEND_URL = "https://blog-nextjs-backend.onrender.com";
// const BACKEND_URL = "http://localhost:8000";

interface Category {
  _id: string;
  name: string;
  posts: any;
}

const page = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/categories`);
      setCategories(response.data.results);
      console.log(response.data.results);
    } catch (error: any) {
      console.log("Error fetching home posts", error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories?.map((category) => (
          <div className="min-h-[120px] flex flex-col gap- items-center justify-center rounded-md bg-white">
            <p className="">{category?.posts?.length}</p>
            <p>{category?.name}</p>
            <Link className="text-purple-700 mt-4 text-xs" href={"#"}>
              View All
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
