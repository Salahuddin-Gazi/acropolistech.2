import fs from "fs";
import path from "path";
import { marked } from "marked";
import { GetStaticPropsContext } from "next";
import { blogContentType } from "@/types/defaultTypes";
import getSlug from "@/lib/getSlug";
import getBlogContent from "@/lib/getBlogContent";

import Layout from "@/components/layout/Layout";
import BlogHeading from "@/components/Blogs/BlogHeading";

interface BlogPageProps {
  blogContent: blogContentType;
}

interface Params {
  slug: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ blogContent }) => {
  //   console.log(blogContent);
  const {
    frontmatter: {
      image,
      author_image,
      author_linkedIn,
      author_post,
      author_name,
      title,
    },
    content,
  } = blogContent;

  const bodyContent = marked(content);
  //   console.log(bodyContent);

  return (
    <Layout>
      <div className="max-w-[1024px] mx-auto p-[25px] mt-[25px]">
        <BlogHeading
          image={image}
          author_image={author_image}
          author_linkedin={author_linkedIn}
          author_post={author_post}
          author_name={author_name}
          title={title}
        />
        <div
          dangerouslySetInnerHTML={{ __html: bodyContent }}
          className="blog-page"
        ></div>
      </div>
    </Layout>
  );
};

export default BlogPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("contents/blogs"));

  const paths = files.map((filename) => {
    const slug = getSlug(filename.replace(".md", ""));
    return {
      params: {
        slug,
      } as Params,
    };
  });

  //   console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const slug = params?.slug || "";

  const files = fs.readdirSync(path.join("contents/blogs"));

  const index = files.findIndex((filename) => {
    const slugToCheck = getSlug(filename.replace(".md", ""));
    return slugToCheck == slug;
  });
  const blogContent = getBlogContent(files[index]);
  //   console.log(blogContent);

  return {
    props: {
      blogContent,
    },
  };
}
