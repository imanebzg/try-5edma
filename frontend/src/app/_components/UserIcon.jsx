"use client";
import { useState } from "react";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import SignOutButton from "./SignOutButton";

function UserIcon() {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  function handleMouseEnter() {
    setHover(true);
  }
  function handleMouseLeave() {
    setHover(false);
  }
  function navigateTo(path) {
    if (router) router.push(path);
  }
  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        className="flex items-center justify-center"
      >
        <User className="w-12 h-12" />
      </div>
      {hover && (
        <div
          onMouseLeave={handleMouseLeave}
          className="absolute top-18 right-0 bg-white shadow-md flex flex-col gap-2 p-4 rounded-lg"
        >
          <button className="underline" onClick={() => navigateTo("/profile")}>
            Mon historique de candidatures
          </button>
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-1"></div>
          <SignOutButton />
        </div>
      )}
    </>
  );
}

export default UserIcon;
