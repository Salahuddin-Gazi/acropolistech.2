import fs from "fs";
import path from "path";
import matter from "gray-matter";

const files = fs.readdirSync(path.join("contents/services"));

export default function getServicesContent() {
  if (files.length > 0) {
    const serviceContents = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("contents/services", filename),
        "utf-8"
      );

      // console.log("markdown", markdownWithMeta);
      const { data: frontmatter, content } = matter(markdownWithMeta);

      return {
        frontmatter,
        content,
      };
    });

    return serviceContents;
  }
}
