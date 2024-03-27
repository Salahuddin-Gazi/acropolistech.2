import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

import Button from "../Button";
import FormFields from "./FormFields";
import Loading from "../Loader/Loading";

interface ContactUsFormProps {
  publicKey: string;
  serviceId: string;
  templateId: string;
}

const ContactUsForm: React.FC<ContactUsFormProps> = ({
  publicKey,
  serviceId,
  templateId,
}) => {
  // console.log(publicKey, serviceId, templateId);
  const [isLoading, setIsLoading] = useState(false);
  const [textareaInput, setTextAreaInput] = useState("");

  const count = textareaInput != "" ? textareaInput.length : 0;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    emailjs
      .send(
        serviceId as string,
        templateId as string,
        data,
        publicKey as string
      )
      .then(
        function (response) {
          if (response.status == 200) {
            // console.log(response);
            reset();
            toast.success("Message sent!");
            setIsLoading(false);
          }
        },
        function (error) {
          // console.log("error", error);
          toast.error("Something went wrong, try again later!");

          setIsLoading(false);
        }
      );
  };

  return (
    <div className="relative lg:p-6 flex-1 contactus-form">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col justify-center items-center">
          <FormFields
            errors={errors}
            register={register}
            disabled={isLoading}
            count={count}
            onChange={(e) => setTextAreaInput(e.target.value)}
          />
          <Button
            title={`Submit <svg class="mt-[-5px] w-[1rem]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(-45 12 12)"><path fill="#fff" d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2l.01 7z"></path></g></svg>`}
            styles={["flex flex-row gap-2 justify-between items-center"]}
            disabled={isLoading}
            action={handleSubmit(onSubmit)}
          />
        </div>
      )}
    </div>
  );
};

export default ContactUsForm;
