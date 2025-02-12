import Link from "next/link";

export const metadata = {
  title: "Sign in",
  description: "Sign in to access your space",
};
export default function Page() {
  return (
    <main className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl max-md:text-xl max-md:text-center font-semibold font-main">
        Inscrivez-vous comme entreprise
      </h2>
      <form className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-primary-blue-1 text-white px-4 py-2 rounded-md"
        >
          Login as Company
        </button>
      </form>
      <Link
        className="text-blue-800 hover:text-blue-600 font-medium transition"
        href="/signup"
      >
        Don't have an account? Sign up
      </Link>
    </main>
  );
}
