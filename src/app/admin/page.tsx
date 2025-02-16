// Hooks / Packages
import Link from "next/link";

// Utils
import { cn } from "@/lib/utils";

//Components
import Heading from "./components/AdminHeading";
import { Separator } from "@/components/ui/Separator";

// Icons
import { ChevronRight, FileEditIcon, Users2Icon } from "lucide-react";

export default function page() {
  return (
    <>
      <section className="flex w-full items-center justify-between">
        <Heading
          title={`All Articles`}
          description={`Manage All blog articles`}
          className="w-full sm:w-auto"
        />
      </section>
      <Separator  />

      <div className="flex items-center justify-center py-40">
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          {[
            {
              href: "/admin/users",
              title: "Manage Users",
              icon: <Users2Icon />,
              count: "(5)",
            },
            {
              href: "/admin/posts",
              title: "Manage Posts",
              icon: <FileEditIcon />,
              count: "(10)",
            },
          ].map(({ href, title, icon, count }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "group flex h-20 w-full cursor-pointer items-center justify-center rounded-xl border bg-gray-50 dark:bg-black/70 md:w-1/2",
              )}
            >
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  {icon}
                  <span className="mx-2">{title}</span>
                  <span className="text-sm text-gray-500">{count}</span>
                </div>
                <hr className="w-0 border-spacing-2 border-primary duration-500 ease-out group-hover:w-full" />
              </div>
              <ChevronRight className="relative ml-4 h-12 w-12 rounded-full object-cover transition-transform duration-200 group-hover:translate-x-2" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
