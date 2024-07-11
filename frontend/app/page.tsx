import Image from "next/image";
import Filters from "../components/home/Filters";
import { Button } from "@/components/ui/button";
import Posts from "@/components/home/Posts";
import Link from "next/link";

// const PEOPLE_LIST = [
//   {
//     id: 1,
//     name: "Chintan Bhatt",
//     image:
//       "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png",
//     role: "The founder & chief designer at YourUXTeam",
//     link: "",
//   },
//   {
//     id: 2,
//     name: "Chintan Bhatt",
//     image:
//       "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png",
//     role: "The founder & chief designer at YourUXTeam",
//     link: "",
//   },
//   {
//     id: 3,
//     name: "Chintan Bhatt",
//     image:
//       "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png",
//     role: "The founder & chief designer at YourUXTeam",
//     link: "",
//   },
// ];

export default function Home() {
  return (
    <main className="">
      <div className="container mx-auto flex">
        <div className="w-2/3 mr-8 py-8">
          <Filters />
          <div className="flex items-center justify-between">
            <h1 className="font-bold">Recent Posts</h1>
            <Link href="/posts">
              <Button size={"sm"} className="rounded-full text-xs" variant="outline">
                View All Posts
              </Button>
            </Link>
          </div>
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
        <div className="w-1/3 border-l pl-8 py-8 sticky top-0 h-[100vh]">
          <div className="p-6 bg-gray-100 rounded-lg mb-8">
            <div>
              <h1 className="font-bold mb-2">
                Get unlimited access to everything on Reader
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
          {/* <div>
            <h1 className="mb-4">People you might be interested</h1>
            <ul className="">
              {PEOPLE_LIST.map((item) => (
                <li className="flex mb-4" key={item.id}>
                  <img className="h-12 rounded-full" src={item.image} alt="" />
                  <div className="flex-1 pl-4">
                    <h2 className="text-sm">{item.name}</h2>
                    <p className="text-xs text-gray-500 max-w-48">
                      {item.role}
                    </p>
                  </div>
                  <Button
                    size={"sm"}
                    className="rounded-xl"
                    variant={"outline"}
                  >
                    Follow
                  </Button>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </main>
  );
}
