import React from "react";
import Link from "next/link";
import UserIcon from "./UserIcon";
const AuthLinks = () => {
  return (
    <div className="flex items-center justify-between px-8 py-3">
      <ul className="font-secondary flex items-center gap-8 text-sm lg:text-base max-sm:hidden">
        <li className="text-blue-800 hover:text-blue-600 font-medium transition">
          <Link href="/careers">Découvrir</Link>
        </li>
        <li className="flex flex-col justify-center relative">
          <UserIcon />
        </li>
      </ul>
    </div>
  );
};

export default AuthLinks;
