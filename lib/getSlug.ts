import slugify from "slugify";

export default function getSlug(title: string) {
  const options = {
    lower: true, // Convert the slug to lowercase
    strict: true, // Replace special characters with their closest ASCII equivalents
    locale: "en", // Set the locale to English
  };

  // console.log(slugify(title, options));

  return slugify(title, options);
}
