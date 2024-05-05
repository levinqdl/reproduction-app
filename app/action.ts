"use server";

import { redirect } from "next/navigation";

export async function toSameOriginWithDiffBasepath() {
  redirect("http://localhost:3000/external")
}