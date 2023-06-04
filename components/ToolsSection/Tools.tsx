import { defaultContentType } from "@/types/defaultTypes";
import { marked } from "marked";
import SectionBody from "../SectionBody/SectionBody";

interface ToolsProps {
  tool: defaultContentType;
}

const Tools: React.FC<ToolsProps> = ({ tool }) => {
  const {
    frontmatter: { image, name },
    content,
  } = tool;

  const toolContent = marked(content);

  return (
    <div id={name}>
      <SectionBody
        name={name}
        image={image}
        content={toolContent}
        // imageClasses="h-[140px] flex justify-center items-center"
      />
    </div>
  );
};

export default Tools;
