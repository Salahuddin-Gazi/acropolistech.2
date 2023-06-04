import { aboutusContentType } from "@/types/defaultTypes";
import AboutUsSummary from "./AboutUsSummary/AboutUsSummary";
import AboutUsDescription from "./AboutUsSummary/AboutUsDescription";
import AboutUsMission from "./AboutUsSummary/AboutUsMission";
import AboutUsServices from "./AboutUsSummary/AboutUsServices";

interface AboutUsSectionProps {
  aboutusContent: aboutusContentType[];
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ aboutusContent }) => {
  //   console.log(aboutusContent);

  const aboutUsSummary = aboutusContent.find(
    (content) => content.frontmatter.type == "aboutUs-summary"
  );
  const aboutUsDescription = aboutusContent.find(
    (content) => content.frontmatter.type == "aboutUs-desc"
  );

  const ourMission = aboutusContent.find(
    (content) => content.frontmatter.type == "ourMission"
  );
  const services = aboutusContent.find(
    (content) => content.frontmatter.type == "services"
  );

  return (
    // <div className="bg-[#ddd]">
    <div className="max-w-[1250px] pt-[60px] px-[25px] mx-auto" id="aboutus">
      {aboutUsSummary && <AboutUsSummary summary={aboutUsSummary} />}
      {aboutUsDescription && (
        <AboutUsDescription summary={aboutUsDescription} />
      )}
      {ourMission && <AboutUsMission summary={ourMission} />}
      {services && <AboutUsServices summary={services} />}
      {/* </div> */}
    </div>
  );
};

export default AboutUsSection;
