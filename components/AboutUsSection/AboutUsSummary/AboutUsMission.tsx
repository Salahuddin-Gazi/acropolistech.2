import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { aboutusContentType } from "@/types/defaultTypes";
import { marked } from "marked";

interface AboutUsMissionProps {
  summary: aboutusContentType;
}

const AboutUsMission: React.FC<AboutUsMissionProps> = ({
  summary: { content },
}) => {
  const aboutUsMission = marked(content);

  return (
    <div className="text-center aboutus-mission">
      <SectionHeading heading={aboutUsMission} />
    </div>
  );
};

export default AboutUsMission;
