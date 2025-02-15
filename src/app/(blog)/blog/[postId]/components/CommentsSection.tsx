"use client";

// Hooks / Packages
import Link from "next/link";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";

// Utils
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

// Components
import SubmitBtn from "@/components/layout/sections/contact/SubmitButton";
import NextImage from "next/image";
import { Separator } from "@/components/ui/Separator";
export default function CommentsSection() {
  const { user } = useUser();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section id="comments">
      <button
        className="group font-semibold"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        View Comments (3)
        <hr className="w-full border-spacing-2 border-primary duration-500 ease-out group-hover:w-0" />
      </button>
      <div className={cn("mt-14 flex flex-col gap-6", { hidden: !isOpen })}>
        <article className="">
          <header className="flex items-center gap-2">
            <NextImage
              src="/images/profile.webp"
              width={80}
              height={80}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
            <span className="font-sm tracking-tighter">John Doe</span>
            <span className="text-xs">on {new Date().toDateString()} </span>
          </header>
          <main className="pt-4 text-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae quidem.
            </p>
          </main>
        </article>
        <Separator className="w-full border-[1px] border-border" />
        <article className="">
          <header className="flex items-center gap-2">
            <NextImage
              src="/images/profile.webp"
              width={80}
              height={80}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
            <span className="font-sm tracking-tighter">John Doe</span>
            <span className="text-xs">on {new Date().toDateString()} </span>
          </header>
          <main className="pt-4 text-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae quidem.
            </p>
          </main>
        </article>

        {/* If Loged in */}
        {user ? (
          <form
            className="mt-10 flex flex-col dark:text-black"
            action={`/api/blog/'/comments`}
            method="post"
          >
            <textarea
              className="borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
              name="comment"
              placeholder="Write Your Comment"
              required
              maxLength={5000}
            />
            <SubmitBtn />
          </form>
        ) : (
          <Link
            className={cn(buttonVariants({ variant: "outline" }))}
            href={"/sign-in"}
          >
            Write Your Comment
          </Link>
        )}
      </div>
    </section>
  );
}
