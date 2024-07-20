"use client";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconLayoutColumns, IconLayoutRows } from "@tabler/icons-react";
import axios from "axios";

interface Post {
  _id: number;
  author: string;
  createdAt: string;
  title: string;
  description: string;
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
    // hour: '2-digit',
    // minute: '2-digit',
    // second: '2-digit',
  };
  return date.toLocaleDateString(undefined, options);
};

const BACKEND_URL = "http://localhost:8000";

const page = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [layoutDefault, setLayoutDefault] = useState<Boolean>(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/posts`);
      setPosts(response.data.results);
    } catch (error: any) {
      console.log("Error fetching home posts", error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <main className="">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 mr-8 py-8">
          <div className="mb-8 flex items-center justify-between">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Posts</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <Button
                onClick={() => {
                  setLayoutDefault(false);
                }}
                className={`rounded-r-none h-8 ${
                  !layoutDefault && "bg-gray-100"
                }`}
                variant={"outline"}
                size={"sm"}
              >
                <IconLayoutRows size={18} />
              </Button>
              <Button
                onClick={() => {
                  setLayoutDefault(true);
                }}
                className={`rounded-l-none h-8 ${
                  layoutDefault && "bg-gray-100"
                }`}
                variant={"outline"}
                size={"sm"}
              >
                <IconLayoutColumns size={18} />
              </Button>
            </div>
          </div>
          {/* posts  start*/}
          <div>
            {posts?.map((item) => (
              <div key={item._id} className="mt-4 border-t py-8 flex flex-col">
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
                <div
                  className={`flex justify-between gap-4 lg:gap-4 ${
                    !layoutDefault && "flex-col gap-2 lg:gap-2"
                  }`}
                >
                  <div className={`w-2/3 ${!layoutDefault && "w-full"}`}>
                    <Link href={`/posts/${item?._id}`}>
                      <h1 className="text-xl font-bold mb-2 hover:text-gray-700">
                        {item?.title}
                      </h1>
                    </Link>
                    <p className="text-sm text-gray-500">{item?.description}</p>
                  </div>
                  <img
                    className={`w-1/3 rounded-lg grayscale ${
                      !layoutDefault && "w-full"
                    }`}
                    src={item?.image}
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-4 mt-4">
                  {item?.categories?.data?.map(
                    (category: any, index: number) => (
                      <Link href={`/posts/category/${category?._id}`}>
                        <span
                          key={index}
                          className="text-xs h-10 bg-gray-100 rounded-full flex items-center px-6"
                        >
                          {category?.name}
                        </span>
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* POSTS end */}
        </div>
        <div className="w-full md:w-1/3 md:border-l md:pl-8 py-8 sticky top-0 md:h-[100vh]">
          <div>
            <h1 className="mb-4">Discover More...</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
