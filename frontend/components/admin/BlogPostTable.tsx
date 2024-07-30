import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import toast from "react-hot-toast";

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

const BlogPostTable = () => {
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

  const deletePostHandler = async (id: number) => {
    try {
      const response = await axios.delete(`${BACKEND_URL}/api/posts/${id}`);
      if (response.status === 200) {
        setPosts((prevState) => prevState.filter((post) => post._id !== id));
        toast.success("Deleted");
      }
    } catch (error: any) {
      console.log("Error fetching home posts", error.message);
    }
  };

  return (
    <div className="bg-white mt-4 rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
            {/* <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts?.map((post) => (
            <TableRow key={post?._id}>
              <TableCell>
                <img src={post?.image} alt="" />
              </TableCell>
              <TableCell>{post?.title}</TableCell>
              <TableCell>{getPrettyDate(post?.createdAt)}</TableCell>
              <TableCell className="text-right flex gap-2">
                <Button size={"sm"} variant={"outline"}>
                  <IconEdit />
                </Button>
                <Button
                  onClick={() => deletePostHandler(post?._id)}
                  size={"sm"}
                  className="bg-red-500/30 hover:bg-red-500"
                  variant={"outline"}
                >
                  <IconTrash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BlogPostTable;
