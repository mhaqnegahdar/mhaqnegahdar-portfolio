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
import { MoreHorizontal } from "lucide-react";

// Types
import { User } from "@clerk/nextjs/server";

// Actions
import { removeRole, setRole } from "@/app/admin/users/actions";

interface CellActionProps {
  data: User;
}

const CellAction = ({ data }: CellActionProps) => {
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
        <div className="flex flex-col gap-2">
          <DropdownMenuItem>
            <form action={setRole} className="inline">
              <input type="hidden" value={data.id} name="id" />
              <input type="hidden" value="admin" name="role" />
              <button type="submit" className="cursor-pointer">
                Make Admin
              </button>
            </form>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <form action={setRole} className="inline">
              <input type="hidden" value={data.id} name="id" />
              <input type="hidden" value="moderator" name="role" />
              <button type="submit" className="cursor-pointer">
                Make Moderator
              </button>
            </form>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <form action={removeRole} className="inline">
              <input type="hidden" value={data.id} name="id" />
              <button
                type="submit"
                className="cursor-pointer text-red-400"
                // onClick={() => onOpen(deletePayload)}
              >
                Remove Role
              </button>
            </form>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CellAction;
