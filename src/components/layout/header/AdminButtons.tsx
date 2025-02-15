import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Files, Settings, Users } from "lucide-react";

const adminButtons = [
  {
    href: `/admin`,
    title: `Admin settings`,
    icon: Settings,
    ariaLabel: `Admin settings`,
  },
  {
    href: `/admin/posts`,
    title: `Manage posts`,
    icon: Files,
    ariaLabel: `Manage posts`,
  },
  {
    href: `/admin/users`,
    title: `Manage users`,
    icon: Users,
    ariaLabel: `Manage users`,
  },
];

export default function AdminButtons() {

    
  return (
    <>
      {adminButtons.map(({ href, title, icon: Icon, ariaLabel }) => (
        <Link
          key={href}
          href={href}
          title={title}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "w-full rounded-none",
          )}
          aria-label={ariaLabel}
        >
          <Icon size={25} aria-label={ariaLabel} />
        </Link>
      ))}
    </>
  );
}
