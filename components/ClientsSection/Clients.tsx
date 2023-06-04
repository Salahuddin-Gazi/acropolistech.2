import { defaultContentType } from "@/types/defaultTypes";
import { marked } from "marked";
import SectionBody from "../SectionBody/SectionBody";

interface ClientsProps {
  client: defaultContentType;
}

const Clients: React.FC<ClientsProps> = ({ client }) => {
  const {
    frontmatter: { image, name },
    content,
  } = client;

  const toolContent = marked(content);

  return (
    <div id={name}>
      <SectionBody
        name={name}
        image={image}
        content={toolContent}
        imageClasses="h-[80px] flex justify-center items-center"
      />
    </div>
  );
};

export default Clients;
