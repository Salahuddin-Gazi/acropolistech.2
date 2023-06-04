import BlogsTile from "@/components/Blogs/BlogsTile";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Layout from "@/components/layout/Layout";
import getBlogsContent from "@/lib/getBlogsContents";
import { blogContentType } from "@/types/defaultTypes";

interface BlogsPageProps {
  blogContents: blogContentType[];
}

const BlogsPage: React.FC<BlogsPageProps> = ({ blogContents }) => {
  //   console.log(blogContents);
  return (
    <Layout>
      <div className="max-w-[1250px] mx-auto px-[25px] py-[50px]">
        <SectionHeading
          heading="Our Blogs"
          styles={[`text-center text-[2rem] font-[700] mb-[30px]`]}
        />
        <BlogsTile contents={blogContents} />
      </div>
    </Layout>
  );
};

export default BlogsPage;

export async function getStaticProps() {
  const blogContents = getBlogsContent();

  blogContents?.sort((a, b) => {
    if (a.frontmatter.created_at && b.frontmatter.created_at) {
      const a_date = new Date(a.frontmatter.created_at);
      const b_date = new Date(b.frontmatter.created_at);

      return b_date.getTime() - a_date.getTime();
    } else {
      return 0;
    }
  });

  return {
    props: {
      blogContents,
    },
  };
}
