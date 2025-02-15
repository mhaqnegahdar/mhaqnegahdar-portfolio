// Components
import Heading from "@/app/admin/components/AdminHeading";
import { DataTable } from "@/components/ui/DataTable";
import { Separator } from "@/components/ui/Separator";

// Icons
import { Columns } from "./components/Columns";
import { clerkClient } from "@clerk/nextjs/server";

export default async function AllUsersPage() {
  const client = await clerkClient();

  const users = (await client.users.getUserList({})).data;
  return (
    <>
      <section className="flex w-full items-center justify-between">
        <Heading
          title={`All Users`}
          description={`Manage All users.`}
          className="w-full sm:w-auto"
        />
      </section>
      <Separator />
      <DataTable searchKey="email" columns={Columns} data={users} />
    </>
  );
}
