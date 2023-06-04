import { useEffect, useState } from "react";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top fixed bottom-5 right-5 p-3 bg-[#000] rounded-[15px] ${
        isVisible ? "visible" : "invisible"
      }`}
      title="Go Top"
      onClick={scrollToTop}
    >
      <TbArrowBigUpLinesFilled
        color="rgb(250, 75, 0)"
        className="w-[35px] h-[35px]"
      />
    </button>
  );
};

export default BackToTopButton;
