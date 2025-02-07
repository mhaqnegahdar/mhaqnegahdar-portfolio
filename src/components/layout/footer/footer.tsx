// Hooks / Packages
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

// Utils
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="mb-10 flex-nowrap divide-x-2 px-4 text-center text-gray-500 dark:text-white/90 ">
      <small className="px-4">
        © {new Date().getFullYear()} Mohamad Haqnegahdar
      </small>
      <Link
        href={`https://github.com/mhaqnegahdar`}
        className={cn(
          buttonVariants({ variant: "link" }),
          "h-4 rounded-none text-gray-500 dark:text-white/90",
        )}
      >
        <Github />
      </Link>
      <Link
        href={`https://www.linkedin.com/in/mhaqnegahdar/`}
        className={cn(
          buttonVariants({ variant: "link" }),
          "h-4 rounded-none text-gray-500 dark:text-white/90",
        )}
      >
        <Linkedin />
      </Link>
    </footer>
  );
}
