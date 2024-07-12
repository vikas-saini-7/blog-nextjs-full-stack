"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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

interface CategoryAttributes {
  name: string;
  blogs: {
    data: Blog[];
  };
}

interface Category {
  id: number;
  attributes: CategoryAttributes;
}

interface BlogAttributes {
  title: string;
  description: string;
  createdAt: string;
  author: string;
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

interface Blog {
  id: number;
  attributes: BlogAttributes;
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

const BACKEND_URL = "https://vikas-saini-blog.onrender.com";

const Page: React.FC = () => {
  const { id } = useParams();
  const [category, setCategory] = useState<Category | null>(null);
  const [categoryBlogs, setCategoryBlogs] = useState<Blog[]>([]);

  const fetchCategoryData = async () => {
    const url = `${BACKEND_URL}/api/categories/${id}?populate=*`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`);
      }
      const result = await response.json();
      setCategory(result.data);
      setCategoryBlogs(result.data.attributes.blogs.data);
      console.log(result.data.attributes.blogs.data);
      console.log(result.data);
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, [id]);

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
                  <BreadcrumbLink href="/posts">Posts</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{category?.attributes?.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Button variant={"outline"} size={"sm"}>
              View
            </Button>
          </div>
          {/* posts  start*/}
          <div>
            {categoryBlogs?.map((item) => (
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
                  {item?.attributes?.categories?.data.map((category, index) => (
                    <span
                      key={index}
                      className="text-xs h-10 bg-gray-100 rounded-full flex items-center px-6"
                    >
                      {category?.attributes?.name}
                    </span>
                  ))}
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

export default Page;
