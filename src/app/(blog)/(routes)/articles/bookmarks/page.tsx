import type { Metadata } from "next";

import React from "react";
import BlogHeading from "@/app/(blog)/(routes)/articles/components/BlogHeading";
import SearchBar from "@/app/(blog)/(routes)/articles/components/search/SearchBar";
import PostList from "@/app/(blog)/(routes)/articles/components/posts/PostList";
import { Bookmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Bookmarks | Mohamad Haqnegahdar",
  description: "Full Stack Developer with your profite in mind",
};

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center">
      <BlogHeading title="My Bookmarks" icon={Bookmark} />
      <SearchBar />
      <PostList />
    </main>
  );
}
