import React from "react";
import UserIcon from "./UserIcon";
const AuthLinks = ({ user }) => {
  return (
    <div className="flex items-center justify-between px-8 py-3">
      <ul className="font-secondary flex items-center gap-8 text-sm lg:text-base">
        <li className="flex flex-col justify-center relative">
          <UserIcon user={user} />
        </li>
      </ul>
    </div>
  );
};

export default AuthLinks;
