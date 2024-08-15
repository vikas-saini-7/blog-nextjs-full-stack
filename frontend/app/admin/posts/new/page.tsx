"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { IconArrowLeft } from "@tabler/icons-react";
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
  const [loading, setLoading] = useState<Boolean>(false);

  const [formData, setFormData] = useState({
    title: "",
    image: null as File | null,
    description: "",
    content: "",
    categories: [] as string[],
  });

  const fetchCategories = async () => {
    try {
      const url = `${BACKEND_URL}/api/categories`;
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      image: e.target.files ? e.target.files[0] : null,
    });
  };

  const handleCheckboxChange = (category: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      categories: prevFormData.categories.includes(category)
        ? prevFormData.categories.filter((cat) => cat !== category)
        : [...prevFormData.categories, category],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.content ||
      !formData.categories.length ||
      !formData.image
    ) {
      return alert("Please fill required fields");
    }

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("image", formData.image as Blob);
    formData.categories.forEach((category) =>
      formDataToSend.append("categories", category)
    );

    try {
      setLoading(true);
      const response = await axios.post(
        `${BACKEND_URL}/api/posts`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data.results);
      toast.success("Post Published successfully");
      setLoading(false);
    } catch (error: any) {
      console.log("error", error.message);
      toast.error("Some error occurred");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
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
            name="title"
            onChange={handleChange}
            id="title"
            type="text"
            placeholder="Title of the blog"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="image">Cover Image</Label>
          <Input
            name="image"
            onChange={handleImageChange}
            id="image"
            type="file"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="description">Description*</Label>
          <Input
            name="description"
            onChange={handleChange}
            id="description"
            type="text"
            placeholder="Description of the blog"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="content">Content*</Label>
          <Textarea
            name="content"
            onChange={handleChange}
            id="content"
            placeholder="Content of the blog"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="categories">Categories</Label>
          {allCategories?.map((category) => (
            <div key={category?._id}>
              <input
                className="mr-2"
                type="checkbox"
                value={category._id}
                checked={formData.categories.includes(category?._id)}
                onChange={() => handleCheckboxChange(category?._id)}
              />
              <label>{category?.name}</label>
            </div>
          ))}
        </div>
        <Button
          className={`${loading ? "hover:bg-black/50 bg-black/50" : ""}`}
          type="submit"
        >
          {loading ? "Posting..." : "Publish"}
        </Button>
      </div>
    </form>
  );
};

export default page;
