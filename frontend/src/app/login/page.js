import Category from "../_components/Category";
import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Sign in",
  description: "Sign in to access your careers",
};
export default function Page() {
  return (
    <main className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold">
        Inscrivez-vous comme candidat ou employeur
      </h2>
      <SignInButton />
    </main>
  );
}
