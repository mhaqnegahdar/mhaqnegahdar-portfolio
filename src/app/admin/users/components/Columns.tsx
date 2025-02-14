"use client";


// Components
import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./CellAction";

// Icons
import { StarIcon } from "lucide-react";

// Types
import { Post } from "@/types/models";

export type ArticleColumn = Omit<Post, "content" | "image"> & {
  categories: string[];
  likes: number;
  bookmarks: number;
};

export const Columns: ColumnDef<ArticleColumn>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="flex items-center">
        <span
          className={`mr-2 h-2 w-2 rounded-full ${
            row.original.status === "published" ? "bg-green-500" : "bg-red-500"
          }`}
        ></span>
        {row.original.status}
      </div>
    ),
  },
  {
    accessorKey: "categories",
    header: "Categories",
  },
  {
    accessorKey: "likes",
    header: "Likes",
  },
  {
    accessorKey: "bookmarks",
    header: "Bookmarks",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ getValue }) => {
      const date = getValue() as Date;
      return (
        <time dateTime={date.toISOString()} className="text-sm">
          {new Intl.DateTimeFormat(undefined, {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(date)}
        </time>
      );
    },
  },
  {
    accessorKey: "isFeatured",
    header: "",
    cell: ({ getValue }) => (
      <span className="flex items-center" title="Featured Post">
        {getValue() ? (
          <StarIcon className="size-3 fill-yellow-500 text-yellow-500" />
        ) : null}
      </span>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

export const data: ArticleColumn[] = [
  {
    id: "1",
    userId: "1",
    title: "How to create a blog with Next.js",
    categories: ["nextjs", "blog"],
    status: "published",
    isFeatured: true,
    createdAt: new Date("2022-01-01"),
    updatedAt: new Date("2022-01-01"),
    likes: 10,
    bookmarks: 5,
    readTime: "5 min read",
  },
  {
    id: "2",
    userId: "1",
    title: "How to create a REST API with Next.js",
    categories: ["nextjs", "api"],
    status: "draft",
    isFeatured: false,
    createdAt: new Date("2022-01-02"),
    updatedAt: new Date("2022-01-02"),
    likes: 5,
    bookmarks: 2,
    readTime: "7 min read",
  },
  {
    id: "3",
    userId: "2",
    title: "How to create a chatbot with Next.js",
    categories: ["nextjs", "chatbot"],
    status: "published",
    isFeatured: true,
    createdAt: new Date("2022-01-03"),
    updatedAt: new Date("2022-01-03"),
    likes: 15,
    bookmarks: 10,
    readTime: "6 min read",
  },
];

