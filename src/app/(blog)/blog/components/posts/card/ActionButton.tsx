"use client";

import { cn } from "@/lib/utils";
import { Bookmark, Heart } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useState } from "react";

interface ActionButtonProps {
  type: "like" | "save";
  className?: string;
  label?: string;
  initialState: boolean;
}

export default function ActionButton({
  type,
  className,
  label,
  initialState,
}: ActionButtonProps) {
  const [isActive, setIsActive] = useState(initialState);

  //   const [isPending, startTransition] = useTransition();

  const { user } = useUser();
  async function handleClick() {
    if (!user) {
      redirect("/sign-in");
      return;
    }
    setIsActive((prev) => !prev);
    // startTransition(async () => {
    //   const res = await handleAction(postId, actionType, userId);
    //   if (res.success) {
    //     setIsActive(res.added ?? false);
    //   }
    // });
  }

  const activeColor = type == "like" ? "red" : "green";
  const Icon = type == "like" ? Heart : Bookmark;

  return (
    <button
      className={cn(
        "group flex gap-1 rounded-full bg-black/50 px-2 py-2 text-sm font-semibold text-white transition hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 md:rounded-lg md:px-4",

        className,

        isActive
          ? `bg-${activeColor}-500 hover:bg-${activeColor}-400 dark:bg-${activeColor}-400 dark:text-${activeColor}-900 dark:hover:bg-${activeColor}-300 text-white`
          : "",
      )}
      onClick={handleClick}
    >
      <Icon
        size={20}
        className={cn(
          "stroke-white transition-all group-hover:scale-110",
          isActive ? `stroke-${activeColor}-900` : "",
        )}
      />
      {label ? <span className="hidden text-sm md:block">{label}</span> : null}
    </button>
  );
}
