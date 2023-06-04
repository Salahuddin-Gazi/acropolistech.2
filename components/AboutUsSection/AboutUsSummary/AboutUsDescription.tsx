import { aboutusContentType } from "@/types/defaultTypes";
import { marked } from "marked";

interface AboutUsDescriptionProps {
  summary: aboutusContentType;
}

const AboutUsDescription: React.FC<AboutUsDescriptionProps> = ({
  summary: { content },
}) => {
  const aboutUsDesc = marked(content);

  return (
    <div
      className="aboutus-description"
      dangerouslySetInnerHTML={{ __html: aboutUsDesc }}
    ></div>
  );
};

export default AboutUsDescription;
