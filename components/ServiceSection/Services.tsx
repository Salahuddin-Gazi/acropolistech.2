import { defaultContentType } from "@/types/defaultTypes";
import { marked } from "marked";
import SectionBody from "../SectionBody/SectionBody";

interface ServicesProps {
  service: defaultContentType;
  idx: number;
}

const Services: React.FC<ServicesProps> = ({ service, idx }) => {
  const {
    frontmatter: { image, name },
    content,
  } = service;

  const serviceContent = marked(content);

  return (
    <div
      id={name}
      className={`flex items-center ${
        idx % 2 == 0 ? `justify-start` : `justify-end`
      } ${idx != 0 ? `lg:mt-[-200px]` : ``}`}
    >
      <SectionBody
        image={image}
        name={name}
        content={serviceContent}
        classes="lg:max-w-[45%]"
      />
    </div>
  );
};

export default Services;
