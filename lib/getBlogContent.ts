import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getBlogContent(filename: string) {
  const markdownWithMeta = fs.readFileSync(
    path.join("contents/blogs", filename),
    "utf-8"
  );

  // console.log("markdown", markdownWithMeta);
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    frontmatter,
    content,
  };
}
