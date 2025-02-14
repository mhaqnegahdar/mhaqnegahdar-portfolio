// Packages / Hooks
import React from "react";
import Link from "next/link";

// Components
import Image from "@/components/ui/Image";

// Icons
import { Hourglass } from "lucide-react";
import ActionButton from "./ActionButton";

export default function PostCard() {
  return (
    <article className="group/item relative flex flex-col gap-2 overflow-hidden transition-all duration-150 hover:scale-105">
      <header className="relative">
        <Link href="/blog/nextjs" className="overflow-hidden rounded-xl">
          <Image
            path="/images/projects/netflix-clone.webp"
            alt="Mohamad Haqnegahdar"
            w={400}
            h={300}
            className="aspect-video w-full rounded-xl object-cover"
          />
        </Link>
        <span className="absolute left-2 top-2 rounded-sm bg-primary px-1 py-[2px] text-xs uppercase tracking-tighter text-primary-foreground duration-150 hover:scale-105">
          <Link className="" href="/blog?category=nextjs">
            Nextjs
          </Link>
        </span>
      </header>
      <main className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">
          <Link href="/blog/title">Title of the post</Link>
        </h2>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae
          quidem.
        </p>
      </main>
      <footer className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ActionButton
            type="like"
            initialState={false}
            userId={undefined}
            className="flex h-8 w-8 items-center justify-center text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 md:rounded-full md:p-0"
          />
          <ActionButton
            type="save"
            initialState={false}
            userId={"undefined"}
            className="flex h-8 w-8 items-center justify-center text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 md:rounded-full md:p-0"
          />
        </div>
        <div className="flex items-center">
          <Hourglass className="h-3 w-3 text-gray-600 dark:text-gray-400" />
          <span className="text-xs text-gray-600 dark:text-gray-400">
            12min read
          </span>
        </div>
      </footer>
    </article>
  );
}
