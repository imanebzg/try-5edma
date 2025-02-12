"use client";
import { useState } from "react";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import SignOutButton from "./SignOutButton";
import documentIncon from "@/public/file-text.svg";
import greoupIcon from "@/public/users.svg";
import messageIcon from "@/public/mail.svg";
import Image from "next/image";

function UserIcon({ user }) {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  function handleMouseEnter() {
    setHover(true);
  }
  function handleMouseLeave() {
    setHover(false);
  }
  function handleMouseClick() {
    setHover((hover) => !hover);
  }
  function navigateTo(path) {
    if (router) router.push(path);
  }
  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onClick={handleMouseClick}
        className="flex items-center justify-center"
      >
        <User className="w-12 h-12 max-md:w-8 max-md:h-8" />
      </div>
      {hover && (
        <div
          onMouseLeave={handleMouseLeave}
          className="absolute top-8 -right-6 bg-white shadow-md flex flex-col gap-2 max-md:gap-1 rounded-lg w-max p-2 max-md:p-1"
        >
          <div className="flex flex-col gap-2 max-md:gap-1">
            <h2 className="text-lg font-semibold text-center">{user?.name}</h2>
            <p className="text-sm text-center text-neutral-3">{user?.email}</p>
          </div>
          <div className="flex flex-col gap-2 max-md:gap-1 border-b border-t border-neutral-2 p-4 max-md:p-2">
            <button
              className="font-medium transition flex justify-start items-center p-2 max-md:p-1 gap-1 hover:bg-neutral-1 w-full"
              onClick={() => navigateTo("/careers")}
            >
              <Image src={documentIncon} alt="profile" width={32} height={32} />
              Les carrrières
            </button>
            <button
              className="font-medium transition flex justify-start items-center p-2 max-md:p-1 gap-1 hover:bg-neutral-1 w-full"
              onClick={() => navigateTo("/history")}
            >
              <Image src={messageIcon} alt="messages" width={32} height={32} />
              Demandes
            </button>
            <button
              className="font-medium transition flex justify-start items-center p-2 max-md:p-1 gap-1 hover:bg-neutral-1 w-full"
              onClick={() => navigateTo("/company")}
            >
              <Image src={greoupIcon} alt="company" width={32} height={32} />
              Organismes contactés
            </button>
          </div>
          <SignOutButton />
        </div>
      )}
    </>
  );
}

export default UserIcon;
