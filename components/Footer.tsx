import { NEXT_URL } from "@/config";
import { optionTypes } from "@/types/defaultTypes";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const optionsGenerator = (options: optionTypes[]) => {
  if (options.length === 0) return;

  let linkOptions = options.map((option, idx) => {
    return (
      <li key={idx} className={`${idx != 0 ? `ml-[15px]` : ``}`}>
        <Link
          href={option.link}
          className={`uppercase hover:text-[#fff] underline`}
        >
          {option.title}
        </Link>
      </li>
    );
  });

  return linkOptions;
};

const linkOptions: optionTypes[] = [
  {
    title: "services",
    link: `${NEXT_URL}/#services`,
  },
  {
    title: "blogs",
    link: `${NEXT_URL}/blogs`,
  },
  {
    title: "contact us",
    link: `${NEXT_URL}/contactus`,
  },
];

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-[#1b1b1a] lg:p-[50px] p-[30px]">
      <div className="max-w-[650px] mx-auto text-center text-[#fa4b00]">
        <SocialLinks />
        <ul className="flex flex-row justify-center items-center mb-[5px] mt-[10px] lg:text-lg text-md">
          {optionsGenerator(linkOptions)}
        </ul>
        <p className="italic">© {year} Acropolis Tech. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
