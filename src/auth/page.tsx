import { redirect } from "next/navigation";

export default function PageAuthLogin() {
  redirect("/auth/login");
  return null;
}
