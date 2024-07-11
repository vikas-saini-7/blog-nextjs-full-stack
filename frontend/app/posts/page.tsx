import React from "react";
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

const page = () => {
  return (
    <main className="">
      <div className="container mx-auto flex">
        <div className="w-2/3 mr-8 py-8">
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
            <Button variant={"outline"} size={"sm"}>
              View
            </Button>
          </div>
          {/* posts  start*/}
          <div>
            posts page designing soon..
            {/* {categoryBlogs?.map((item) => (
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
            ))} */}
          </div>
          {/* POSTS end */}
        </div>
        <div className="w-1/3 border-l pl-8 py-8 sticky top-0 h-[100vh]">
          <div>
            <h1 className="mb-4">Discover More...</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
