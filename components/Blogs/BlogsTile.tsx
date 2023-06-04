import Link from "next/link";

import { blogContentType } from "@/types/defaultTypes";
import getSlug from "@/lib/getSlug";

interface BlogsTileProps {
  contents: blogContentType[];
}

const BlogsTile: React.FC<BlogsTileProps> = ({ contents }) => {
  //   console.log(contents);
  if (contents.length == 0) {
    return <div>No Blogs Added Yet</div>;
  }
  return (
    <div className="flex flex-row flex-wrap justify-center items-stretch">
      {contents.map(
        ({
          frontmatter: { image, title, excerpt, id, created_at },
          filename,
        }) => {
          //   console.log(filename);
          return (
            <div className="lg:w-1/3 md:w-1/2 w-full p-4" key={id}>
              <Link href={`/blogs/${getSlug(filename)}`}>
                <div className="h-full p-5 flex flex-col items-center justify-center blogs-item bg-[#fff]">
                  <img
                    src={image}
                    alt={title}
                    className="h-1/2 object-contain"
                  />
                  <div className="mt-[10px]">
                    <h1 className="text-lg font-[500] mb-[10px]">{title}</h1>
                    <p className="text-sm font-[300]">{excerpt}</p>
                    {/* <p>{created_at}</p> */}
                  </div>
                </div>
              </Link>
            </div>
          );
        }
      )}
    </div>
  );
};

export default BlogsTile;
