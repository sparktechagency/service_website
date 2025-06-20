"use client";
import CustomInput from "../form/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateContactMutation } from "@/redux/features/contact/contactApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { contactSchema } from "@/schemas/contact.schema";
import { z } from "zod";
import { SetContactError } from "@/redux/features/contact/contactSlice";
import Error from "../validation/Error";
import CustomTextArea from "../form/CustomTextArea";
import { useEffect } from "react";
import { CgSpinnerTwo } from "react-icons/cg";

type TFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const { ContactError } = useAppSelector((state) => state.contact);
  const [sendMessage, { isLoading, isSuccess }] = useCreateContactMutation();
  const { handleSubmit, control, reset } = useForm({
    resolver: zodResolver(contactSchema),
  });

  //if send success
  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess, reset]);

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetContactError(""));
    sendMessage(data);
  };

  return (
    <>
      {ContactError && <Error message={ContactError} />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <CustomInput
          label="Name"
          name="name"
          type="text"
          control={control}
          placeholder="Enter full name"
        />
        <CustomInput
          label="Email"
          name="email"
          type="text"
          control={control}
          placeholder="Enter email address"
        />
        <CustomInput
          label="Subject"
          name="subject"
          type="text"
          control={control}
          placeholder="Enter subject"
        />
        <CustomTextArea
          label="Message"
          name="message"
          control={control}
          placeholder="write here..."
          rows={3}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full cursor-pointer bg-primary hover:bg-gray-700 disabled:bg-gray-700 text-white py-3 px-4 rounded flex items-center justify-center gap-x-2 transition duration-300"
        >
          {isLoading ? (
            <>
              <CgSpinnerTwo className="animate-spin" fontSize={16} />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
