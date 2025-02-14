import type { Metadata } from "next";

import React from "react";
import BlogHeading from "./components/BlogHeading";
import SearchBar from "./components/search/SearchBar";
import PostList from "./components/posts/PostList";

export const metadata: Metadata = {
  title: "Blog | Mohamad Haqnegahdar",
  description: "Full Stack Developer with your profite in mind",
};

export default function page() {
  const headingDescription = `I’m Mohamad, a full-stack software developer specializing in
                Next.js and Node.js. Based in Iran, I collaborate remotely with
                international companies. In my blog, I share insights about the
                technologies I use, my learnings, and more.`;

  return (
    <main className="flex flex-col items-center justify-center">
      <BlogHeading
        title="Welcome to My Blog"
        description={headingDescription}
        socialMedia
      />
      <SearchBar />
      <PostList />
    </main>
  );
}
