import React from "react";
import { Button } from "../ui/button";
import { IconTrash } from "@tabler/icons-react";
import axios from "axios";
import toast from "react-hot-toast";

const BACKEND_URL = "http://localhost:8000";

const DeletePost = ({ _id }: any) => {
  const deletePostHandler = async () => {
    try {
      const response = await axios.delete(`${BACKEND_URL}/api/posts/${_id}`);
      if (response) {
        toast.success("Deleted");
      }
    } catch (error: any) {
      console.log("Error fetching home posts", error.message);
    }
  };
  return (
    <Button
      onClick={deletePostHandler}
      size={"sm"}
      className="bg-red-500/30 hover:bg-red-500"
      variant={"outline"}
    >
      <IconTrash />
    </Button>
  );
};

export default DeletePost;
