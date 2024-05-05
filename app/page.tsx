import { toSameOriginWithDiffBasepath } from "./action";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <form action={toSameOriginWithDiffBasepath}>
        <button type="submit">redirect external</button>
      </form>
    </>
  );
}
