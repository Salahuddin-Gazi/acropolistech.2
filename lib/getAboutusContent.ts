import fs from "fs";
import path from "path";
import matter from "gray-matter";

const files = fs.readdirSync(path.join("contents/aboutus"));

export default function getAboutUsContent() {
  if (files.length > 0) {
    const aboutusContents = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("contents/aboutus", filename),
        "utf-8"
      );

      // console.log("markdown", markdownWithMeta);
      const { data: frontmatter, content } = matter(markdownWithMeta);

      return {
        frontmatter,
        content,
      };
    });

    return aboutusContents;
  }
}
