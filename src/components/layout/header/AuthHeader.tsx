// Packages
import React from "react";
import Link from "next/link";

// utils
import { cn } from "@/lib/utils";
import { Redo2, Undo2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";

export default function AuthHeader() {
  return (
    <header className="relative z-[999]">
      <nav className="fixed left-0 top-0 flex h-20 w-full flex-col items-center justify-between px-4 py-2 sm:flex-row">
        <Link
          className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
          href={"/"}
        >
          Back to Portfolio <Undo2 size={18} className="ml-2" />
        </Link>
        <Link
          className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
          href={"/blog"}
        >
          <Redo2 size={18} className="mr-2" />
          Back to Blog
        </Link>
      </nav>
    </header>
  );
}
