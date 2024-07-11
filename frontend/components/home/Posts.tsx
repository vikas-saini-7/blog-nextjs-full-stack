"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PostsSkeleton from "../skeletons/PostsSkeleton";

interface Post {
  id: number;
  attributes: {
    author: string;
    createdAt: string;
    title: string;
    description: string;
    tags: string[];
    readTime: string;
    image: any;
    categories: any;
  };
}

const getPrettyDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: '2-digit',
    // minute: '2-digit',
    // second: '2-digit',
  };
  return date.toLocaleDateString(undefined, options);
};

const BACKEND_URL = "http://localhost:1337";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  const fetchBlogs = async () => {
    const url = "http://localhost:1337/api/blogs?populate=*";
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`);
      }
      const result = await response.json();
      setPosts(result.data);
      console.log(result.data);
      setLoading(false);
      return result.data;
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div>
        {posts?.map((item) => (
          <div key={item.id} className="mt-4 border-t py-8 flex flex-col">
            <div className="flex mb-4">
              <img
                className="h-12 rounded-full"
                src="https://imgcdn.stablediffusionweb.com/2024/5/2/81328692-c85f-4e08-9c01-f8f9f49fb291.jpg"
                alt=""
              />
              <div className="pl-4">
                <div className="flex items-center gap-3">
                  <h1>{item.attributes.author}</h1>
                  <p className="text-xs text-gray-500">
                    {getPrettyDate(item.attributes.createdAt)}
                  </p>
                </div>
                <p className="text-sm text-gray-500">Software Developer</p>
              </div>
            </div>
            <div className="flex justify-between gap-4 lg:gap-8">
              <div className="w-2/3">
                <Link href={`/posts/${item.id}`}>
                  <h1 className="text-xl font-bold mb-2 hover:text-gray-700">
                    {item.attributes.title}
                  </h1>
                </Link>
                <p className="text-sm text-gray-500">
                  {item.attributes.description}
                </p>
              </div>
              <img
                className="w-1/3 rounded-lg grayscale"
                src={`${BACKEND_URL}${item?.attributes?.image?.data?.attributes?.url}`}
                alt=""
              />
            </div>
            <div className="flex items-center gap-4 mt-4">
              {item.attributes?.categories?.data.map(
                (category: any, index: number) => (
                  <span
                    key={index}
                    className="text-xs h-10 bg-gray-100 rounded-full flex items-center px-6"
                  >
                    {category?.attributes?.name}
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
