import Image from "next/image";
import Filters from "../components/home/Filters";
import { Button } from "@/components/ui/button";
import Posts from "@/components/home/Posts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 mr-8 py-8">
          <Filters />
          <div className="flex items-center justify-between">
            <h1 className="font-bold">Recent Posts</h1>
            <Link href="/posts">
              <Button
                size={"sm"}
                className="rounded-full text-xs"
                variant="outline"
              >
                View All Posts
              </Button>
            </Link>
          </div>
          <Posts />
        </div>
        <div className="w-full md:w-1/3 md:border-l md:pl-8 py-8 sticky top-0 md:h-[100vh]">
          <div className="p-6 bg-gray-100 rounded-lg mb-8">
            <div>
              <h1 className="font-bold mb-2">
                Get unlimited access to everything on our Blog
              </h1>
              <p className="text-xs text-gray-500 mb-4">
                Plans starting at least than $1/week.
              </p>
              <Button size={"sm"} className="rounded-xl" variant={"outline"}>
                Get unlimited access
              </Button>
            </div>
            <div></div>
          </div>
          {/* [POPULAR_POSTS ] */}
        </div>
      </div>
    </main>
  );
}
