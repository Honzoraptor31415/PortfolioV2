"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = createClient();

  const errorMessages: any = {
    "invalid login credentials": "No match",
  };

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  error &&
    redirect(
      `/login?emailMessage=${
        errorMessages[error.message.toLowerCase()] ?? "Something went wrong"
      }`
    );

  revalidatePath("/", "layout");
  redirect("/");
}
