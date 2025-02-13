"use client";

// Packages
import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";

// store
import { useSectionsStore } from "@/store/sectionsModalStore";

// utils
import { cn } from "@/lib/utils";
import { Undo2, UserCircle2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/Button";

import { Separator } from "@/components/ui/Separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuSimpleTrigger,
} from "@/components/ui/NavigationMenue";

export default function BlogHeader() {
  const pathname = usePathname();

  const { setActiveSection, setTimeOfLastClick } = useSectionsStore();

  const user = true;

  return (
    <header className="relative z-[999]">
      <nav className="fixed left-0 top-0 flex h-20 w-full items-center justify-between px-4 py-2">
        {!user ? (
          <Button
            className="rounded-full"
            variant={"outline"}
            onClick={() => {}}
          >
            <UserCircle2 size={25} className="" />
            Login
          </Button>
        ) : (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuSimpleTrigger>
                  <div
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "max-w h-auto max-w-[150px] text-wrap rounded-full text-left text-xs",
                    )}
                  >
                    <NextImage
                      src="/images/profile.webp"
                      width={150}
                      height={150}
                      alt="Avatar"
                      className="size-8 rounded-full"
                    />
                    Mohamad Haqnegahdar
                  </div>
                </NavigationMenuSimpleTrigger>
                <NavigationMenuContent className="min-w-[200px] divide-y-2 overflow-hidden p-0">
                  <Link
                    href={`/articles/favorites`}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-12 w-full justify-start rounded-none border-none",
                    )}
                  >
                    Favorites
                  </Link>
                  <Separator />

                  <Link
                    href={`/articles/bookmarks`}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-12 w-full justify-start rounded-none border-none",
                    )}
                  >
                    Bookmarks
                  </Link>
                  <Separator />

                  <Link
                    href={`/admin`}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-12 w-full justify-start rounded-none border-none",
                    )}
                  >
                    Dashboard
                  </Link>
                  <Separator />
                  <Link
                    href={`/admin`}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-12 w-full justify-start rounded-none border-none",
                    )}
                  >
                    Manage Posts
                  </Link>
                  <Separator />

                  <Link
                    href={`/admin`}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-12 w-full justify-start rounded-none border-none",
                    )}
                  >
                    Manage Users
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {pathname === "/articles" ? (
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full",
            )}
            href={"/"}
            onClick={() => {
              setActiveSection("Home");
              setTimeOfLastClick(Date.now());
            }}
          >
            Back to Portfolio <Undo2 size={18} className="ml-2" />
          </Link>
        ) : (
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full",
            )}
            href={"/articles"}
          >
            Back to Blog <Undo2 size={18} className="ml-2" />
          </Link>
        )}
      </nav>
    </header>
  );
}
