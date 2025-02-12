import SignUpForm from "../_components/SignUpForm";

export default function SignUpPage() {
  return (
    <main className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold max-md:text-xl max-md:text-center font-main">
        Inscrivez-vous comme entreprise
      </h2>
      <SignUpForm />
    </main>
  );
}
