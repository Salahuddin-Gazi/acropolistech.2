import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Input from "../Input";
import TextArea from "../TextArea";

interface FormFieldsProps {
  register: UseFormRegister<FieldValues>;
  disabled?: boolean;
  errors: FieldErrors;
  count?: number;
  onChange?: (value: any) => void;
}

const FormFields: React.FC<FormFieldsProps> = ({
  register,
  disabled,
  errors,
  count,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-4 max-w-[650px] w-[100%] mx-auto">
      <Input
        id="name"
        // type="name"
        label="Name"
        register={register}
        disabled={disabled}
        errors={errors}
        required
      />
      <Input
        id="email"
        // type="email"
        label="Email"
        register={register}
        disabled={disabled}
        errors={errors}
        required
      />
      <Input
        id="phone"
        type="tel"
        label="Phone"
        register={register}
        disabled={disabled}
        errors={errors}
      />
      <TextArea
        id="message"
        label="Message"
        register={register}
        disabled={disabled}
        errors={errors}
        count={count}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormFields;
