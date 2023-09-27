import React from "react";
import Link from "next/link";
// import { signIn, signOut } from "next-auth/client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  // console.log("useSession()= ", useSession());
  // console.log("session = ", session);

  if (session) {
    return (
      <nav className="header">
        <h1 className="logo">
          <a href="#">NextAuth</a>
        </h1>
        <ul className="main-nav">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/blog">Blog</Link>

          <Link
            href="/api/auth/signout"
            onClick={(event) => {
              event.preventDefault();
              signOut();
            }}
          >
            sign Out
          </Link>
        </ul>
      </nav>
    );
  }
  if (!session) {
    return (
      <nav className="header">
        <h1 className="logo">
          <a href="#">NextAuth</a>
        </h1>
        <ul className="main-nav">
          <Link
            href="/api/auth/signin"
            onClick={(event) => {
              event.preventDefault();
              signIn("github");
            }}
          >
            Sign In
          </Link>
        </ul>
      </nav>
    );
  }
}
