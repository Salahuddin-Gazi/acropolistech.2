import { defaultContentType } from "@/types/defaultTypes";

interface SectionHeadingProps {
  heading: string;
  styles?: string[];
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ heading, styles }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: heading }}
      className={`section-heading mb-[50px] ${styles ? styles.join() : ""}`}
    ></div>
  );
};

export default SectionHeading;
