import type { Metadata } from "next";

import React from "react";
import BlogHeading from "@/app/(blog)/blog/components/BlogHeading";
import SearchBar from "@/app/(blog)/blog/components/search/SearchBar";
import PostList from "@/app/(blog)/blog/components/posts/PostList";
import { Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Bookmarks | Mohamad Haqnegahdar",
  description: "Full Stack Developer with your profite in mind",
};

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center">
      <BlogHeading title="My Favorites" icon={Heart} />
      <SearchBar />
      <PostList />
    </main>
  );
}
