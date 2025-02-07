import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction} className="flex w-full">
      <button className="bg-error text-white p-2 rounded-lg w-full">
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
