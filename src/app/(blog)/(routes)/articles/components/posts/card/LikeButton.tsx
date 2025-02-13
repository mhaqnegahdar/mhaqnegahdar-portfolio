"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

interface LikeButtonProps {
  className?: string;
  label?: string;
}

export default function LikeButton({ className, label }: LikeButtonProps) {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleClick = () => setIsLiked((prev) => !prev);

  return (
    <button
      className={cn(
        "group flex gap-1 rounded-full bg-black/50 px-2 py-2 text-sm font-semibold text-white transition hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 md:rounded-lg md:px-4",

        className,

        {
          "bg-red-500 text-white hover:bg-red-400 dark:bg-red-400 dark:text-red-900 dark:hover:bg-red-300":
            isLiked,
        },
      )}
      onClick={handleClick}
    >
      <Heart
        size={20}
        className={cn("stroke-white transition-all group-hover:scale-110", {
          "stroke-red-900": isLiked,
        })}
      />
      {label ? <span className="hidden text-sm md:block">{label}</span> : null}
    </button>
  );
}
