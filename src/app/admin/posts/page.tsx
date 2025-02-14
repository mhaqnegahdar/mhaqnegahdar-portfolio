// Hooks / Packages
import Link from "next/link";

// Components
import Heading from "@/app/admin/components/AdminHeading";
import { buttonVariants } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Separator } from "@/components/ui/Separator";

// Types

// Icons
import { Plus } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";

// Table
import { Columns, data } from "./components/Columns";

const AllArticlesPage = () => {
  return (
    <>
      <section className="flex w-full items-center justify-between">
        <Heading
          title={`All Articles`}
          description={`Manage All blog articles`}
          className="w-full sm:w-auto"
        />
        <Link
          className={cn(
            buttonVariants({ variant: `default` }),
            "hidden sm:flex",
          )}
          href={`/admin/posts/new`}
        >
          <Plus className="me-2 h-4 w-4" />
          Add New
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: `secondary` }),
            "block h-[3.25rem] rounded-full sm:hidden",
          )}
          href={`/admin/posts/new`}
        >
          <span className="sr-only">Add New</span>
          <Plus className="h-4 w-4" />
        </Link>
      </section>
      <Separator />
      <DataTable searchKey="title" columns={Columns} data={data} />
    </>
  );
};

export default AllArticlesPage;
