interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: (value: any) => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen((value: boolean) => (value = !value))}
      className="lg:hidden sm:ml-[15px] ml-[10px]"
    >
      {!isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]"
        >
          <path
            fill="none"
            stroke="#eb4d4d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 17h18M3 12h18M3 7h18"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]"
        >
          <path
            fill="#eb4d4d"
            d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
          />
        </svg>
      )}
    </button>
  );
};

export default Hamburger;
