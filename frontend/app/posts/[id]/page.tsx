"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  IconFileDislike,
  IconHeart,
  IconShare,
  IconShare2,
  IconShare3,
} from "@tabler/icons-react";
import axios from "axios";

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

interface Post {
  _id: string;
  author: string;
  createdAt: string;
  title: string;
  description: string;
  tags: string[];
  readTime: string;
  content: any;
  image: string;
  categories: any;
}

const Page: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { id } = useParams<{ id: string }>();

  const fetchPost = async () => {
    const url = `${BACKEND_URL}/api/posts/${id}`;
    try {
      const response = await axios.get(url);

      setPost(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  return (
    <main className="">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* COLUMN 1 */}
        <div className="w-full md:w-2/3 mr-8 py-8">
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/posts">posts</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{post?.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                className="h-12 rounded-full"
                src="https://imgcdn.stablediffusionweb.com/2024/5/2/81328692-c85f-4e08-9c01-f8f9f49fb291.jpg"
                alt=""
              />
              <div className="pl-4">
                <div className="flex items-center gap-3">
                  <h1>{post?.author}</h1>
                  <p className="text-xs text-gray-500">
                    {post && getPrettyDate(post?.createdAt)}
                  </p>
                </div>
                <p className="text-sm text-gray-500">Software Developer</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {post?.categories?.map((category: any, index: number) => (
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
          <h1 className="text-2xl font-bold mb-2">{post?.title}</h1>
          {post?.image && (
            <img
              className="min-h-[200px] bg-gray-100 w-full rounded-lg"
              src={post?.image}
              alt={`${post?.image} Not found`}
            />
          )}
          {/* CONTENT  */}
          <div className="mt-4">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post?.content }}
            />
          </div>
          {/* SHARE  */}
          <div className="mt-8 flex items-center gap-4">
            <Button variant={"outline"} className="flex items-center gap-1">
              <IconHeart size={18} />
            </Button>
            <Button variant={"outline"} className="flex items-center gap-1">
              <IconShare3 size={18} />
            </Button>
          </div>
        </div>

        {/* COLUMN 2  */}
        <div className="w-full md:w-1/3 md:border-l md:pl-8 py-8 sticky top-0 md:h-[100vh]">
          <div>
            <h1 className="mb-4">You may also like...</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
