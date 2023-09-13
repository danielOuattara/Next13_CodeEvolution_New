import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className="main-nav">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/blog">BLog</Link>
        <Link href="#">Sign In</Link>
        <Link href="#">sign Out</Link>
      </ul>
    </nav>
  );
}
