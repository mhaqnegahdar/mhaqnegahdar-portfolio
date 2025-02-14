"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Bookmark } from "lucide-react";

interface SaveButtonProps {
  className?: string;
  label?: string;
}

export default function SaveButton({ className, label }: SaveButtonProps) {
  const [isSaved, setIsSaved] = React.useState(false);

  const handleClick = () => setIsSaved((prev) => !prev);

  return (
    <button
      className={cn(
        "group flex gap-1 rounded-full bg-black/50 px-2 py-2 text-sm font-semibold text-white transition hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 md:rounded-lg md:px-4",

        className,

        {
          "bg-green-500 text-white hover:bg-green-400 dark:bg-green-400 dark:text-green-900 dark:hover:bg-green-300":
            isSaved,
        },
      )}
      onClick={handleClick}
    >
      <Bookmark
      size={20}
        className={cn("stroke-white transition-all group-hover:scale-110", {
          "stroke-green-900": isSaved,
        })}
      />
      {label ? <span className="hidden text-sm md:block">{label}</span> : null}
    </button>
  );
}
