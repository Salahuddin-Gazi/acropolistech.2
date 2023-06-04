export type optionTypes = {
  title: string;
  link: string;
  internalLink?: boolean;
};

export type defaultContentType = {
  content: string;
  frontmatter: {
    name: string;
    image: string;
    id?: string;
  };
};

export type aboutusContentType = {
  content: string;
  frontmatter: {
    type: string;
    id?: string;
  };
};

export type blogContentType = {
  content: string;
  filename: string;
  frontmatter: {
    author_name: string;
    author_image: string;
    author_linkedIn: string;
    author_post: string;
    created_at: string;
    id: string;
    image: string;
    title: string;
    excerpt: string;
  };
};
