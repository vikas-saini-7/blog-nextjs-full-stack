"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { IconArrowBack, IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import toast from "react-hot-toast";

const BACKEND_URL = "http://localhost:8000";

interface Category {
  _id: string;
  name: string;
  posts: any;
}

const page = () => {
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [loading, setloading] = useState<Boolean>(false);

  const [title, setTitle] = useState<String>();
  const [image, setImage] = useState<String>();
  const [description, setDescription] = useState<String>();
  const [content, setContent] = useState<String>();
  const [categories, setCategories] = useState<String[]>([]);

  const fetchCategories = async () => {
    const url = `${BACKEND_URL}/api/categories`;
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setAllCategories(response.data.results);
        console.log(response.data.results);
      }
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCheckboxChange = (category: any) => {
    setCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const createPostHandler = async () => {
    if (!title || !description || !content || !categories) {
      return alert("Please fill required fields");
    }
    const postData = {
      title,
      description,
      content,
      categories,
    };
    try {
      setloading(true);
      const response = await axios.post(`${BACKEND_URL}/api/posts`, postData);
      console.log(response.data.results);
      toast.success("Post Published successfully");
      setloading(false);
    } catch (error: any) {
      console.log("error", error.message);
      toast.error("Some error occured");
      setloading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Link href="/admin/posts">
            <Button variant={"outline"}>
              <IconArrowLeft />
            </Button>
          </Link>
          <h1 className="font-semibold">Create New</h1>
        </div>
        <Button variant={"outline"}>Save to Cloud</Button>
      </div>
      <div className="max-w-[800px]">
        <div className="mb-4">
          <Label htmlFor="title">Title*</Label>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            placeholder="Title of the blog"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="picture">Cover Image</Label>
          <Input
            onChange={(e) => setImage(e.target.value)}
            id="picture"
            type="file"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="description">Description*</Label>
          <Input
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            type="text"
            placeholder="Description of the blog"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="content">Content*</Label>
          <Textarea
            onChange={(e) => setContent(e.target.value)}
            id="content"
            placeholder="Description of the blog"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="content">Categories</Label>
          {allCategories?.map((category) => (
            <div key={category?._id}>
              <input
                className="mr-2"
                type="checkbox"
                value={category._id}
                checked={categories.includes(category?._id)}
                onChange={() => handleCheckboxChange(category?._id)}
              />
              <label>{category?.name}</label>
            </div>
          ))}
        </div>
        <Button
          className={`${loading ? "hover:bg-black/50 bg-black/50" : ""}`}
          onClick={createPostHandler}
        >
          {loading ? "Posting..." : "Publish"}
        </Button>
      </div>
    </div>
  );
};

export default page;
