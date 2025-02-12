"use client";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const { register, handleSubmit, getValues, formState } = useForm();
  const { errors } = formState;

  const onSubmit = async (data) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Sign up successful!");
    } else {
      alert("Sign up failed!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-1/2 max-md:w-4/5 font-main text-base bg-light-text py-6 px-16 max-md:px-4 max-md:py-2 rounded-md"
    >
      <label
        htmlFor="Nom de l'entreprise"
        className="text-xl max-md:text-lg font-semibold"
      >
        Nom de l'entreprise
      </label>
      <input
        {...register("companyName", {
          required: "Nom de l'entreprise est requis",
        })}
        type="text"
        className="w-full border border-gray-300 rounded-md p-4 max-md:p-2"
      />
      {errors?.companyName && (
        <span className="text-red-500 text-sm">
          {errors.companyName.message}
        </span>
      )}
      <label
        htmlFor="Lien de l'entreprise"
        className="text-xl max-md:text-lg font-semibold"
      >
        Lien de l'entreprise
      </label>
      <input
        {...register("companyLink", {
          required: "Lien de l'entreprise est requis",
        })}
        type="text"
        className="w-full border border-gray-300 rounded-md p-4 max-md:p-2"
      />
      {errors?.companyLink && (
        <span className="text-red-500 text-sm">
          {errors.companyLink.message}
        </span>
      )}
      <label htmlFor="Email" className="text-xl max-md:text-lg font-semibold">
        Email
      </label>
      <input
        {...register("email", {
          required: "Email est requis",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Email invalide",
          },
        })}
        type="email"
        className="w-full border border-gray-300 rounded-md p-4 max-md:p-2 "
      />
      {errors?.email && (
        <span className="text-red-500 text-sm">{errors.email.message}</span>
      )}
      <label
        htmlFor="Mot de passe"
        className="text-xl max-md:text-lg font-semibold"
      >
        Mot de passe
      </label>
      <input
        {...register("password", {
          required: "Mot de passe est requis",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        })}
        type="password"
        className="w-full border border-gray-300 rounded-md p-4 max-md:p-2"
      />
      {errors?.password && (
        <span className="text-red-500 text-sm">{errors.password.message}</span>
      )}
      <label
        htmlFor="Confirmer le mot de passe"
        className="text-xl max-md:text-lg font-semibold"
      >
        Confirmer le mot de passe
      </label>
      <input
        {...register("confirmPassword", {
          required: "Confirmerle mot de passe est requis",
          validate: (value) =>
            value === getValues().password ||
            "Les mots de passe ne correspondent pas",
        })}
        type="password"
        className="w-full border border-gray-300 rounded-md p-4 max-md:p-2"
      />
      {errors?.confirmPassword && (
        <span className="text-red-500 text-sm">
          {errors.confirmPassword.message}
        </span>
      )}
      <button
        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full hover:from-blue-700 hover:to-blue-900 transition transform hover:scale-105 shadow-lg w-max self-center"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
}
