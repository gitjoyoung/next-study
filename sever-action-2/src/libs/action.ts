"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const serverAction = async (formData: FormData) => {
  const response = await fetch("http://localhost:4000/users", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    revalidatePath("/");
    redirect("/");
  }
};

export async function invalidData() {
  revalidatePath("/");
}
