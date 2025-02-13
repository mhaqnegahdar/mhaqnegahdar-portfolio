import React from "react";

// Components
import PostForm from "./components/PostForm";

//Types
import { Category, FetchedPost } from "@/types/models";

export default function CreateArticlePage() {
  const mockArticle: FetchedPost = {
    id: "1",
    userId: "1",
    title: "Post",
    image: "https://picsum.photos/200/300",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, lectus at ultrices malesuada, justo libero tincidunt purus, vitae tincidunt nunc nibh a erat. Morbi nec lectus id lectus malesuada eleifend. Nulla ut lectus auctor, egestas magna quis, mattis lectus. Sed et nulla auctor, dictum nibh nec, convallis nunc. Nulla facilisi. Nulla in diam eu magna tincidunt laoreet. Sed nec lectus id lectus malesuada eleifend. Nulla ut lectus auctor, egestas magna quis, mattis lectus. Sed et nulla auctor, dictum nibh nec, convallis nunc.",
    status: "draft",
    isFeatured: false,
    readTime: "5 min read",
    createdAt: new Date(),
    updatedAt: new Date(),
    categories: [
      { id: "1", title: "Next.js" },
      { id: "2", title: "React" },
    ],
  };

  const mockCategories: Category[] = [
    {
      id: "1",
      title: "Next.js",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      title: "React",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "3",
      title: "TypeScript",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return (
    <>
      <PostForm post={mockArticle} categories={mockCategories} />
    </>
  );
}
