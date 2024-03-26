import { Poppins } from "next/font/google";
// import { useState } from "react";

import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
// import getNavHeight from "@/lib/getNavHeight";
import BackToTopButton from "../BackToTopButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  styles?: string[];
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  keywords,
  styles,
}) => {
  // const [navHeight, setNavHeight] = useState(getNavHeight());

  // if (typeof window !== "undefined") {
  //   window.addEventListener("scroll", () => {
  //     const offsetHeight = getNavHeight();

  //     if (navHeight != offsetHeight) {
  //       setNavHeight(offsetHeight);
  //     }
  //   });

  //   // console.log(navHeight);
  // }

  return (
    <div
      className={`${
        poppins.className
      } flex flex-col min-h-[100vh] bg-[#f6f6f6] ${
        styles ? styles.join() : ""
      }`}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
      <div className="flex-1">{children}</div>
      <BackToTopButton />
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title:
    "Acropolis Tech | A/B Test | Split Test | Software Development | Bug Fix",
  description:
    "Acropolis Tech optimizes websites & apps through experimentation with A/B tests, multivariate tests & CRO tools. We prioritize quality, efficiency & client success.",
  keywords:
    "A/B Test, Split Test, Software Development, Bug Fix, Website Optimization, App Optimization, Experimentation, CRO (Conversion Rate Optimization), Quality, Efficiency, Client Success, Multivariate Testing, Website Testing, App Testing, Optimization Tools",
};

export default Layout;
