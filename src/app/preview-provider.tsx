"use client";

import { PropsWithChildren } from "react";
import { LiveQueryProvider } from "next-sanity/preview";
import { client } from "@/sanity/lib/client";

function PreviewProvider({ children }: PropsWithChildren) {
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}

export default PreviewProvider;
