import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextAreaProps {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  disabled?: boolean;
  required?: boolean;
  errors: FieldErrors;
  count?: number;
  onChange?: (value: any) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  register,
  disabled,
  required,
  errors,
  count,
  onChange,
}) => {
  return (
    <div className="w-full relative">
      <textarea
        id={id}
        {...register(id, { required })}
        disabled={disabled}
        required={required}
        placeholder=" "
        maxLength={2000}
        onChange={onChange}
        className={`peer w-full p-4 pt-6 font-light h-[200px] bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
        ${
          errors?.[id]
            ? `border-rose-500 focus:border-rose-500`
            : `border-neutral-400 focus:border-[#374971]`
        }
        `}
      />
      <label
        className={`absolute text-md duration-150 transform -translate-y-3 top-5 left-[1rem] z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
        peer-focus:-translate-y-4 ${
          errors?.[id] ? `text-rose-500` : `text-zinc-500`
        }`}
      >
        {label}
      </label>
      <p className="text-end text-[#fff] text-md">{count ? count : 0}/2000</p>
    </div>
  );
};

export default TextArea;
