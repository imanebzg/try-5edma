"use server";

import { signIn, signOut } from "./auth";
import { BACK_API } from "./data-service";

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/",
  });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function companySignInAction(email, password) {
  await signIn("credentials", {
    email,
    password,
    redirectTo: "/",
  });
}

export async function companyRegisterAction(email, password, name, link) {
  const response = await fetch(BACK_API + "/api/auth/company/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
      companyName: name,
      companyLink: link,
    }),
  });

  if (!response.ok) {
    throw new Error("Company registration failed");
  }

  return await response.json();
}
