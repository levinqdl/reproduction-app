"use server";

import { redirect } from "next/navigation";

export async function toSameOriginWithDiffBasepath(url: string) {
  redirect(url)
}