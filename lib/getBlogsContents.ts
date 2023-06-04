import fs from "fs";
import path from "path";
import matter from "gray-matter";

const files = fs.readdirSync(path.join("contents/blogs"));

export default function getBlogsContent() {
  if (files.length > 0) {
    const blogsContent = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("contents/blogs", filename),
        "utf-8"
      );

      // console.log("markdown", markdownWithMeta);
      const { data: frontmatter, content } = matter(markdownWithMeta);

      return {
        frontmatter,
        content,
        filename: filename.replace(".md", ""),
      };
    });

    return blogsContent;
  }
}
