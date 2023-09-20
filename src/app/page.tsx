import { client } from "@/sanity/lib/client";
import { draftMode } from "next/headers";
import HomePage from "./home-page";
import HomePagePreview from "./home-page-preview";
import { Post, postsQuery } from "@/sanity/query";
import PreviewProvider from "./preview-provider";

async function Home() {
  const { isEnabled } = draftMode();

  const posts = await client.fetch<Post[]>(postsQuery);

  if (isEnabled)
    return (
      <PreviewProvider>
        <HomePagePreview posts={posts} />
      </PreviewProvider>
    );

  return <HomePage posts={posts} />;
}

export default Home;
