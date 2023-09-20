export type Post = {
  content: string;
};

export const postsQuery = `*[_type == "post"]`;
