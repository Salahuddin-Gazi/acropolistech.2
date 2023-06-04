import fs from "fs";
import path from "path";
import matter from "gray-matter";

const files = fs.readdirSync(path.join("contents/hero"));

export default function getHeroContent() {
  const hero = files.filter((file) => file == "hero.md");

  if (hero.length > 0) {
    const filename = hero[0];

    // console.log("filename", filename);

    const markdownWithMeta = fs.readFileSync(
      path.join("contents/hero", filename),
      "utf-8"
    );

    // console.log("markdown", markdownWithMeta);
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      frontmatter,
      content,
    };
  }
}
