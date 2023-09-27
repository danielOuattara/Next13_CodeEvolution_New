import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function DashboardPage() {
  console.log("useSession() = ", useSession());
  return <h1>dashboard page</h1>;
}
