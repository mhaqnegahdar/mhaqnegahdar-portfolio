"use client";

// Packages
import React from "react";
import Link from "next/link";
import NextImage from "next/image";

// utils
import { cn } from "@/lib/utils";
import { UserCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";

import { Separator } from "@/components/ui/Separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuSimpleTrigger,
} from "@/components/ui/NavigationMenue";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import BlogHeaderBackButton from "./BlogHeaderBackButton";
import LogoutButton from "./LogoutButton";
import AdminButtons from "./AdminButtons";

export default function BlogHeader() {
  const { user } = useUser();

  // Check role in publicMetadata
  const isAdmin = user?.publicMetadata?.role === "admin";

  return (
    <header className="relative z-[999]">
      <nav className="fixed left-0 top-0 flex h-20 w-full items-center justify-between px-4 py-2">
        <SignedOut>
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full",
            )}
            href={"/sign-in"}
          >
            <UserCircle2 size={25} className="" />
            Login
          </Link>
        </SignedOut>

        <SignedIn>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* Navigation BUtton */}
                <NavigationMenuSimpleTrigger>
                  {/* User Info */}
                  <div
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "max-w h-auto max-w-[150px] text-wrap rounded-full text-left text-xs",
                    )}
                  >
                    <NextImage
                      src={`${user?.imageUrl}`}
                      width={150}
                      height={150}
                      alt="Avatar"
                      className="size-8 rounded-full"
                    />
                    {user?.fullName}
                  </div>
                </NavigationMenuSimpleTrigger>
                {/* Navigation */}
                <NavigationMenuContent className="min-w-[200px] divide-y-2 overflow-hidden p-0">
                  {/* Blog Buttons */}
                  <Link
                    href={`/blog/favorites`}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-12 w-full justify-start rounded-none border-none",
                    )}
                  >
                    Favorites
                  </Link>
                  <Separator />

                  <Link
                    href={`/blog/bookmarks`}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-12 w-full justify-start rounded-none border-none",
                    )}
                  >
                    Bookmarks
                  </Link>
                  <Separator />
                  <div className="flex w-full ">
                    {/* Admin Buttons */}
                    {isAdmin ? (
                      <>
                        <AdminButtons />
                      </>
                    ) : null}
                    {/* Logout Button */}
                    <LogoutButton />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </SignedIn>

        <BlogHeaderBackButton />
      </nav>
    </header>
  );
}
