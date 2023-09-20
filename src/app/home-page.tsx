import { Post } from "@/sanity/query";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  posts: Post[];
};

function HomePage({ posts }: Props) {
  return (
    <main className="flex flex-col gap-y-8 items-center p-24">
      {posts.map(({ content }, index) => (
        <div key={index}>
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                development: true, // FIX: temporary fix for: https://github.com/hashicorp/next-mdx-remote/issues/350
              },
            }}
          />
        </div>
      ))}
    </main>
  );
}

export default HomePage;
