"use server";

import { signIn, signOut } from "@/auth";

export async function SignIn() {
  await signIn("google", { callbackUrl: "/" });
}

export async function SignOut() {
  return await signOut();
}
