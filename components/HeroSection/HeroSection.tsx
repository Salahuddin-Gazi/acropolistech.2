import { defaultContentType } from "@/types/defaultTypes";
import { marked } from "marked";

interface HeroSectionProps {
  heroContent: defaultContentType;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heroContent: {
    content,
    frontmatter: { image },
  },
}) => {
  const markedContent: string = marked(content);

  return (
    <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-[30px] gap-[50px] lg:max-w-[1250px] max-w-[700px] mx-auto mt-[30px] px-[25px]">
      <div
        dangerouslySetInnerHTML={{ __html: markedContent }}
        className="flex-[1] hero-content"
      ></div>
      <div className="flex-[1] max-w-[475px]">
        <img alt="AcropolisTech" src={image} className="w-100" />
      </div>
    </div>
  );
};

export default HeroSection;
