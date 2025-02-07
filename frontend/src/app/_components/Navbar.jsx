import React from "react";
import Link from "next/link";
import UserIcon from "./UserIcon";
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-30">
      <nav className="flex items-center justify-between px-8 py-3">
        <Link href="/" className="font-main">
          <div className="flex items-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
              Try<span className="text-blue-900">Khedma</span>
            </span>
          </div>
        </Link>
        <ul className="font-secondary flex items-center gap-8 text-sm lg:text-base max-sm:hidden">
          <li className="text-neutral-900 text-xl underline">
            <Link href="/careers">Découvrir</Link>
          </li>
          <li>
            <UserIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
