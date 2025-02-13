"use client";
// Hooks / Packages
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useAlertModalStore } from "@/store/alertModalStore";

// Components
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

// Icons
import { Edit, MoreHorizontal, Trash } from "lucide-react";

// Types
import { ArticleColumn } from "./Columns";
interface CellActionProps {
  data: ArticleColumn;
}

const CellAction = ({ data }: CellActionProps) => {
  const router = useRouter();
  // const params = useParams();

  const { onOpen } = useAlertModalStore();

  // States
  const deletePayload = useMemo(() => {
    return {
      title: "Are you sure you want to delete this article?",
      description: "This action cannot be undone.",
      action: "delete",
      api: `/api/userid/posts/${data.id}`,
      successMessage: "Product deleted.",
      failMessage: "Something went wrong while removing the article",
      afterRoute: `/userid/products`,
    };
  }, [data.id]);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => router.push(`/userid/posts/${data.id}`)}
        >
          <Edit className="mr-2 h-4 w-4" /> Update
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => onOpen(deletePayload)}
        >
          <Trash className="mr-2 h-4 w-4" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CellAction;
