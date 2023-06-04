import Link from "next/link";

const SocialLinks = () => {
  return (
    // <div className="">
    //   <p className="mb-[10px]">We welcome you!</p>
    <div className="flex flex-row gap-[20px] justify-center items-center">
      <Link
        target="_blank"
        href={`https://www.linkedin.com/company/acropolis-tech/`}
        className="max-w-[35px] transition grayscale hover:grayscale-0 hover:scale-125"
      >
        <img alt="Linkedin" src={`/images/linkedin.png`} width={`100%`} />
      </Link>
      <Link
        target="_blank"
        href={`https://twitter.com/Acropolis_Tech/`}
        className="max-w-[35px] transition grayscale hover:grayscale-0 hover:scale-125"
      >
        <img alt="twitter" src={`/images/twitter.png`} width={`100%`} />
      </Link>
    </div>
    // </div>
  );
};

export default SocialLinks;
