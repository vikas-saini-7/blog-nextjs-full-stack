"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PostsSkeleton from "../skeletons/PostsSkeleton";
import client from "@/sanityClient";
import axios from "axios";

interface Post {
  _id: number;
  author: string;
  createdAt: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readTime: string;
  image: any;
  categories: any;
}

const getPrettyDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
};

const BACKEND_URL = "https://blog-nextjs-backend.onrender.com";
// const BACKEND_URL = "http://localhost:8000";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/posts`);
      setPosts(response.data.results);
      console.log(response.data.results);
    } catch (error: any) {
      console.log("Error fetching home posts", error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div>
        {posts?.map((item) => (
          <div key={item?._id} className="mt-4 border-t py-8 flex flex-col">
            <div className="flex mb-4">
              <img
                className="h-12 rounded-full"
                src="https://imgcdn.stablediffusionweb.com/2024/5/2/81328692-c85f-4e08-9c01-f8f9f49fb291.jpg"
                alt=""
              />
              <div className="pl-4">
                <div className="flex items-center gap-3">
                  <h1>{item?.author}</h1>
                  <p className="text-xs text-gray-500">
                    {getPrettyDate(item?.createdAt)}
                  </p>
                </div>
                <p className="text-sm text-gray-500">Software Developer</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 lg:gap-8">
              <div className="w-full md:w-2/3">
                <Link href={`/posts/${item?._id}`}>
                  <h1 className="text-xl font-bold mb-2 hover:text-purple-700">
                    {item?.title}
                  </h1>
                </Link>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur sit itaque eius dolore, placeat unde dicta ipsa
                  tenetur laborum exercitationem rerum explicabo impedit animi?
                  Esse quae incidunt quia nihil similique.
                </p>
              </div>
              <img
                className="w-full md:w-1/3 rounded-lg grayscale"
                src={`${item?.image}`}
                alt=""
              />
            </div>
            <div className="flex items-center gap-4 mt-4">
              {item?.categories?.map((category: any, index: number) => (
                <Link href={`/posts/category/${category._id}`}>
                  <span
                    key={index}
                    className="text-xs h-10 bg-gray-100 rounded-full flex items-center px-6"
                  >
                    {category?.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
