export const revalidate = 0;

// https://tailwindcomponents.com/component/hoverable-table

import { Pagination, Title } from "@/components";

import { redirect } from "next/navigation";

import { UsersTable } from "./ui/UsersTable";
import { getPaginatedUsers } from "@/actions/user/get-paginater-users";

export default async function OrdersPage() {
  const { ok, users = [] } = await getPaginatedUsers();

  if (!ok) {
    redirect("/auth/login");
  }

  return (
    <>
      <Title title="Mantenimiento de usuarios" />

      <div className="mb-10">
        <UsersTable users={users} />

        <Pagination totalPages={1} />
      </div>
    </>
  );
}
