import React from "react";

// Components
import PostForm from "./components/PostForm";
import { Separator } from "@/components/ui/Separator";
import AdminHeading from "@/app/admin/components/AdminHeading";
import { Category, FetchedPost } from "@/types/models";

//Types
// import { Category, FetchedPost } from "@/types/models";

export default function CreateArticlePage() {
  const mockArticle: FetchedPost = {
    id: "1",
    userId: "1",
    title: "Post",
    image:
      "images/posts/Youtube_Banner_Large_0DoaBEMRp.png?updatedAt=1739690737332",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, lectus at ultrices malesuada, justo libero tincidunt purus, vitae tincidunt nunc nibh a erat. Morbi nec lectus id lectus malesuada eleifend. Nulla ut lectus auctor, egestas magna quis, mattis lectus. Sed et nulla auctor, dictum nibh nec, convallis nunc. Nulla facilisi. Nulla in diam eu magna tincidunt laoreet. Sed nec lectus id lectus malesuada eleifend. Nulla ut lectus auctor, egestas magna quis, mattis lectus. Sed et nulla auctor, dictum nibh nec, convallis nunc.",
    status: "published",
    isFeatured: true,
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
      <section className="flex w-full items-center justify-between">
        <AdminHeading
          title={`New Post`}
          description="Write your new blog."
          className="w-full sm:w-auto"
        />
      </section>
      <Separator />
      <section className="mx-auto max-w-5xl pt-8">
        <PostForm post={mockArticle} categories={mockCategories} />
      </section>
    </>
  );
}
