import React from "react";
import Link from "next/link"; // Next module that helps with routing

const Nav = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </nav>
);

export default Nav;
