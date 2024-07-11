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

interface PostAttributes {
  author: string;
  createdAt: string;
  title: string;
  description: string;
  tags: string[];
  readTime: string;
  content: any;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  categories: {
    data: {
      attributes: {
        name: string;
      };
    }[];
  };
}

interface Post {
  id: number;
  attributes: PostAttributes;
}

const Page: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { id } = useParams<{ id: string }>();

  const fetchBlogs = async () => {
    const url = `http://localhost:1337/api/blogs/${id}?populate=*`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`);
      }
      const result = await response.json();
      setPost(result.data);
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [id]);

  return (
    <main className="">
      <div className="container mx-auto flex">
        {/* COLUMN 1 */}
        <div className="w-2/3 mr-8 py-8">
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
                  <BreadcrumbPage>{post?.attributes?.title}</BreadcrumbPage>
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
                  <h1>{post?.attributes?.author}</h1>
                  <p className="text-xs text-gray-500">
                    {post && getPrettyDate(post.attributes.createdAt)}
                  </p>
                </div>
                <p className="text-sm text-gray-500">Software Developer</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {post?.attributes?.categories?.data.map(
                (category: any, index) => (
                  <Link href={`/posts/category/${category.id}`}>
                    <span
                      key={index}
                      className="text-xs h-10 bg-gray-100 rounded-full flex items-center px-6"
                    >
                      {category.attributes.name}
                    </span>
                  </Link>
                )
              )}
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">{post?.attributes?.title}</h1>
          {post?.attributes?.image?.data?.attributes?.url && (
            <img
              className="w-full rounded-lg"
              src={`${BACKEND_URL}${post.attributes.image.data.attributes.url}`}
              alt=""
            />
          )}
          {/* CONTENT  */}
          <div className="mt-4">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post?.attributes?.content }}
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
        <div className="w-1/3 border-l pl-8 py-8 sticky top-0 h-[100vh]">
          <div>
            <h1 className="mb-4">You may also like...</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
