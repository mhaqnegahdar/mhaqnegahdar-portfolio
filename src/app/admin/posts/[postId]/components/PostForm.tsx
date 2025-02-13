"use client";

import { useState } from "react";
import { FetchedPost, Category } from "@/types/models";
import AdminHeading from "../../../components/AdminHeading";

interface PostFormProps {
  post: FetchedPost;
  categories: Category[];
}

export default function PostForm({ post, categories }: PostFormProps) {
  const [state, setState] = useState<FetchedPost>(post);

  const handleChange =
    (key: keyof FetchedPost) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setState((prevState) => ({
        ...prevState,
        [key]: event.currentTarget.value,
      }));
    };

  return (
  <>
  <AdminHeading title='New Post' description="Write your new blog." />
  
  </>
  );
}
