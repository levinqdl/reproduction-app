"use client"
import { toSameOriginWithDiffBasepath } from "./action";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <form >
        <button formAction={() => toSameOriginWithDiffBasepath(`${window.location.origin}/external`)}>redirect external</button>
      </form>
    </>
  );
}
