import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { aboutusContentType } from "@/types/defaultTypes";
import { marked } from "marked";

interface AboutUsSummaryProps {
  summary: aboutusContentType;
}

const AboutUsSummary: React.FC<AboutUsSummaryProps> = ({
  summary: { content },
}) => {
  const aboutUs = marked(content);

  return (
    <div className="text-center">
      <SectionHeading heading={aboutUs} />
    </div>
  );
};

export default AboutUsSummary;
