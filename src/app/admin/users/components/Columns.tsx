"use client";

// Components
import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./CellAction";

// Types
import { User } from "@clerk/nextjs/server";

export const Columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },

  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "primaryEmailAddress",
    header: "Email",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ getValue }) => {
      const date = getValue() as Date;
      return (
        <time dateTime={date.toISOString()} className="text-sm">
          {new Intl.DateTimeFormat(undefined, {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(date)}
        </time>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
