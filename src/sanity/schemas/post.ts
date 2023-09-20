import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "markdown",
      validation: (rule) => rule.required(),
    }),
  ],
});
