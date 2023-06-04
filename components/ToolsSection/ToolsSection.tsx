import { defaultContentType } from "@/types/defaultTypes";
import { marked } from "marked";
import SectionHeading from "../SectionHeading/SectionHeading";
import Tools from "./Tools";

interface ToolsSectionProps {
  toolsContent: defaultContentType[];
}

const ToolsSection: React.FC<ToolsSectionProps> = ({ toolsContent }) => {
  //   console.log(toolsContent);

  const headingContent = toolsContent.find(
    ({ frontmatter }) => Object.keys(frontmatter).length == 0
  );

  const heading = marked(headingContent?.content as string);

  const tools = toolsContent
    .filter(({ frontmatter }) => Object.keys(frontmatter).length != 0)
    .sort((a, b): number => {
      if (a.frontmatter.id && b.frontmatter.id) {
        return +a.frontmatter.id - +b.frontmatter.id;
      } else {
        return 0;
      }
    });

  return (
    // <div className="bg-[#ddd]">
    <div
      className="max-w-[1250px] pt-[60px] px-[25px] mx-auto text-center"
      id="tools"
    >
      <SectionHeading heading={heading} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] lg:gap-[3rem]">
        {tools.map((tool, idx) => (
          <Tools tool={tool} key={idx} />
        ))}
      </div>
    </div>
    // </div>
  );
};

export default ToolsSection;
