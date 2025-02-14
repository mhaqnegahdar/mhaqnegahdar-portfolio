"use client";

// Packages
import { usePathname } from "next/navigation";

// store
import { useSectionsStore } from "@/store/sectionsModalStore";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Icon
import { Undo2 } from "lucide-react";

export default function BlogHeaderBackButton() {
  const pathname = usePathname();

  const { setActiveSection, setTimeOfLastClick } = useSectionsStore();

  return (
    <>
      {pathname === "/blog" ? (
        <Link
          className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
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
          className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
          href={"/blog"}
        >
          Back to Blog <Undo2 size={18} className="ml-2" />
        </Link>
      )}
    </>
  );
}
