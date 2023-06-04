import { optionTypes } from "@/types/defaultTypes";
import Button from "./Button";
import { useState } from "react";
import Hamburger from "./Hamburger";
import { useRouter } from "next/router";
import Link from "next/link";
import { NEXT_URL } from "@/config";

// let oldHeight = getNavHeight();

const Header = () => {
  const router = useRouter();

  // const [navHeight, setNavHeight] = useState(getNavHeight());
  // const [isNavSmall, setIsNavSmall] = useState(false);

  // if (typeof window !== "undefined") {
  //   window.addEventListener("scroll", () => {
  //     const offsetHeight = getNavHeight();

  //     if (navHeight != offsetHeight) {
  //       setNavHeight(offsetHeight);
  //     }
  //   });

  //   if (navHeight && window.scrollY > navHeight) {
  //     !isNavSmall && setIsNavSmall(true);
  //   } else if (
  //     navHeight &&
  //     window.scrollY < navHeight &&
  //     oldHeight != navHeight
  //   ) {
  //     setNavHeight(oldHeight);
  //     isNavSmall && setIsNavSmall(false);
  //   }
  //   // console.log("navHeight", navHeight);
  // }

  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const href = sectionId == "body" ? "body" : `#${sectionId}`;
    const currentPath = router.pathname;
    const newPath =
      currentPath === "/" ? href : `/${href == "body" ? "" : href}`;
    if (currentPath != "/") {
      router.push(newPath).then(() => {
        let timeout1: NodeJS.Timer;
        let timeout2: NodeJS.Timer;

        timeout1 = setInterval(() => {
          // console.log("Looping...");
          const element = document.querySelector(href) as HTMLElement | null;
          if (element) {
            clearInterval(timeout1);
            clearTimeout(timeout2);
            window.scrollTo({
              top: element.offsetTop,
            });
          }
        }, 5);

        timeout2 = setTimeout(() => {
          // console.log("cleared");
          clearInterval(timeout1);
        }, 10000);
      });
    } else {
      const element = document.querySelector(href) as HTMLElement | null;
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });

        window.history.pushState({}, "", "/");
      }
    }
  };

  const logo: React.ReactNode = (
    <a
      className={`w-[12%] max-w-[225px] min-w-[130px] cursor-pointer`}
      onClick={(e) => handleClick(e, "body")}
    >
      <img
        src={"/images/main_logo_lg.png"}
        alt="acropolistech"
        className="w-[100%] h-auto"
      />
    </a>
  );

  const optionsGenerator = (options: optionTypes[]) => {
    if (options.length === 0) return;

    let linkOptions = options.map((option, idx) => {
      if (!option.internalLink) {
        const ref = option.title.replaceAll(" ", "");
        return (
          <li key={idx}>
            <a
              onClick={(e) => handleClick(e, ref)}
              className={`uppercase lg:hover:text-[#eb4d4d] hover:text-[rgba(30,21,72,.9215686275)] cursor-pointer font-[400]`}
            >
              {option.title}
            </a>
          </li>
        );
      } else {
        return (
          <li key={idx}>
            <Link
              href={"/blogs"}
              className={`uppercase lg:hover:text-[#eb4d4d] hover:text-[rgba(30,21,72,.9215686275)] font-[400]`}
            >
              {option.title}
            </Link>
          </li>
        );
      }
    });

    return linkOptions;
  };

  const linkOptions: optionTypes[] = [
    {
      title: "services",
      link: `${NEXT_URL}/#services`,
    },
    {
      title: "tools",
      link: `${NEXT_URL}/#tools`,
    },
    {
      title: "clients",
      link: `${NEXT_URL}/#clients`,
    },
    {
      title: "about us",
      link: `${NEXT_URL}/#aboutus`,
    },
    {
      title: "blogs",
      link: `${NEXT_URL}/blogs`,
      internalLink: true,
    },
  ];

  const options: React.ReactNode = (
    <>
      <ul className="hidden lg:flex flex-row flex-grow-0 lg:flex-grow justify-between items-center mx-[25px] py-0 px-0 gap-0 bg-[#fff] text-inherit max-w-[600px]">
        {optionsGenerator(linkOptions)}
      </ul>
      <ul
        className={`lg:hidden fixed sm:top-[49px] top-[45px] transition-all duration-300 flex flex-col justify-center items-start py-[20px] px-[60px] gap-3 bg-[#fa4b00] text-[#fff] shadow-md shadow-neutral-300 ${
          showMobileNav ? `visible right-[0px]` : `invisible right-[-500px]`
        }`}
      >
        {optionsGenerator(linkOptions)}
      </ul>
      <div className="flex flex-row justify-between items-center">
        <Link href={`/contactus`}>
          <Button title="contact us" styles={[`sm:px-[10px] sm:py-[8px]`]} />
        </Link>
        {<Hamburger isOpen={showMobileNav} setIsOpen={setShowMobileNav} />}
      </div>
    </>
  );

  return (
    <header
      className={`shadow-sm bg-[#fff] shadow-neutral-300 sticky top-0 left-0 z-[9999]`}
    >
      <nav className="max-w-[1250px] mx-auto px-[12px] py-[5px] flex flex-row items-center justify-between w-[100%]">
        {logo}
        {options}
      </nav>
    </header>
  );
};

export default Header;
