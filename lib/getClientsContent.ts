import fs from "fs";
import path from "path";
import matter from "gray-matter";

const files = fs.readdirSync(path.join("contents/clients"));

export default function getClientsContent() {
  if (files.length > 0) {
    const clientContents = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("contents/clients", filename),
        "utf-8"
      );

      // console.log("markdown", markdownWithMeta);
      const { data: frontmatter, content } = matter(markdownWithMeta);

      return {
        frontmatter,
        content,
      };
    });

    return clientContents;
  }
}
