import Link from "next/link";

interface BlogHeadingProps {
  title: string;
  image: string;
  author_image: string;
  author_linkedin: string;
  author_post: string;
  author_name: string;
}

const BlogHeading: React.FC<BlogHeadingProps> = ({
  image,
  title,
  author_image,
  author_linkedin,
  author_name,
  author_post,
}) => {
  return (
    <div className="w-full flex flex-col">
      <div className="mb-[25px]">
        <img alt={title} src={image} />
      </div>
      <div className="flex flex-row flex-wrap gap-3 justify-start items-center mb-[30px]">
        <div className="max-w-[35px] grayscale hover:grayscale-0 hover:scale-125 transition">
          <img
            alt={author_name}
            src={author_image}
            className="w-full rounded-full"
          />
        </div>
        <p>
          <strong>{author_name}</strong>
        </p>
        <p className="hidden opacity-[.7] sm:block">{author_post}</p>
        <Link
          target="_blank"
          href={author_linkedin}
          className="max-w-[25px] grayscale hover:grayscale-0 hover:scale-125 transition"
        >
          <img alt="Linkedin" src="/images/linkedin.png" className="w-full" />
        </Link>
      </div>
    </div>
  );
};

export default BlogHeading;
