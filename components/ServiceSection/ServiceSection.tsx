import { defaultContentType } from "@/types/defaultTypes";
import { marked } from "marked";
import Services from "./Services";
import SectionHeading from "../SectionHeading/SectionHeading";

interface servicesSectionProps {
  servicesContent: defaultContentType[];
}

const ServiceSection: React.FC<servicesSectionProps> = ({
  servicesContent,
}) => {
  const headingContent = servicesContent.find(
    ({ frontmatter }) => Object.keys(frontmatter).length == 0
  );

  const heading = marked(headingContent?.content as string);

  const services = servicesContent
    .filter(({ frontmatter }) => Object.keys(frontmatter).length != 0)
    .sort((a, b): number => {
      if (a.frontmatter.id && b.frontmatter.id) {
        return +a.frontmatter.id - +b.frontmatter.id;
      } else {
        return 0;
      }
    });

  //   console.log(headingContent, services);
  // console.log(getNavHeight());

  return (
    // <div className="bg-[#e9e6e1] mt-[40px] pb-[30px]" id="services">
    <div
      className={`max-w-[1250px] pt-[60px] px-[25px] mx-auto text-center`}
      id="services"
    >
      <SectionHeading heading={heading} />
      <div className="flex flex-col lg:gap-[0px] gap-[40px] services-content">
        {services.map((service, idx) => (
          <Services service={service} key={idx} idx={idx} />
        ))}
      </div>
    </div>
    // </div>
  );
};

export default ServiceSection;
