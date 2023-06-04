import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { aboutusContentType } from "@/types/defaultTypes";
import { marked } from "marked";

interface AboutUsServicesProps {
  summary: aboutusContentType;
}

const AboutUsServices: React.FC<AboutUsServicesProps> = ({
  summary: { content },
}) => {
  const aboutUsService = marked(content);

  return (
    <div className="text-center aboutus-services">
      <SectionHeading heading={aboutUsService} />
    </div>
  );
};

export default AboutUsServices;
