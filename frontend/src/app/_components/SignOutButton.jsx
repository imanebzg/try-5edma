import Image from "next/image";
import { signOutAction } from "../_lib/actions";
import exitIcon from "@/public/exit.svg";

function SignOutButton() {
  return (
    <form action={signOutAction} className="flex w-full">
      <button
        type="submit"
        className="flex items-center justify-center gap-2 text-error  p-2 rounded-lg hover:bg-neutral-1 w-full"
      >
        <Image src={exitIcon} alt="exit" width={32} height={32} />
        <span>Se déconnecter</span>
      </button>
    </form>
  );
}

export default SignOutButton;
