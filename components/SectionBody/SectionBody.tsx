interface SectionBodyProps {
  content: string;
  image?: string;
  name: string;
  classes?: string;
  imageClasses?: string;
}

const SectionBody: React.FC<SectionBodyProps> = ({
  content,
  image,
  name,
  classes,
  imageClasses,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        classes ? classes : ``
      }`}
    >
      {image && (
        <div
          className={`max-w-[200px] mb-[10px] ${
            imageClasses ? imageClasses : ""
          }`}
        >
          <img alt={name} src={image} width={`100%`} />
        </div>
      )}
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="sectionBody-content"
      ></div>
    </div>
  );
};

export default SectionBody;
