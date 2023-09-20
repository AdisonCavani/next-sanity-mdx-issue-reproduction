"use client";

import { useLiveQuery } from "next-sanity/preview";
import HomePage from "./home-page";
import { Post, postsQuery } from "@/sanity/query";

type Props = {
  posts: Post[];
};

function HomePagePreview({ posts }: Props) {
  const [livePosts] = useLiveQuery<Post[]>(posts, postsQuery);

  return <HomePage posts={livePosts} />;
}

export default HomePagePreview;
