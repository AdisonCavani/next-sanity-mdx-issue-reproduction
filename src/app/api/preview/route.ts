import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

function GET() {
  draftMode().enable();
  redirect("/");
}

export { GET };
