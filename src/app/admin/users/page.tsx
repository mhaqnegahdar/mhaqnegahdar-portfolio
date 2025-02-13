// Components
import Heading from "@/app/admin/components/AdminHeading";
import { DataTable } from "@/components/ui/DataTable";
import { Separator } from "@/components/ui/Separator";

// Types

// Icons
import { Columns, data } from "./components/Columns";

const AllUsersPage = () => {
  return (
    <>
      <section className="flex w-full items-center justify-between ">
        <Heading
          title={`All Users`}
          description={`Manage All users.`}
          className="w-full sm:w-auto"
        />
      
      </section>
      <Separator />
      <DataTable searchKey="title" columns={Columns} data={data} />
    </>
  );
};

export default AllUsersPage;
