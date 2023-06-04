interface ButtonProps {
  title: string;
  styles?: string[];
  disabled?: boolean;
  action?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, styles, disabled, action }) => {
  return (
    <button
      className={`bg-[rgba(30,21,72,.9215686275)] hover:opacity-80 rounded-[10px] sm:px-3 sm:py-3 sm:text-base px-2 py-2 text-xs uppercase disabled:cursor-none disabled:opacity-80 text-[#fff] ${
        styles ? styles.join() : ""
      }`}
      disabled={disabled}
      onClick={action}
      dangerouslySetInnerHTML={{ __html: title }}
    ></button>
  );
};

export default Button;
