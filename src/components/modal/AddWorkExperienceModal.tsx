"use client";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { PlusCircle, X } from "lucide-react";
import CustomInput from "../form/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { workExperienceSchema } from "@/schemas/candidate.schema";
import { z } from "zod";
import CustomDatePicker from "../form/CustomDatePicker";
import CustomCheckbox from "../form/CustomCheckbox";
import CustomTextArea from "../form/CustomTextArea";
import { useAddWorkExperienceMutation } from "@/redux/features/user/userApi";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { SetProfileError } from "@/redux/features/auth/authSlice";
import { CgSpinnerTwo } from "react-icons/cg";

type TFormValues = z.infer<typeof workExperienceSchema>;

const AddWorkExperienceModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [addWorkExperience, { isLoading, isSuccess }] = useAddWorkExperienceMutation();
   

  const { handleSubmit, control, watch, trigger, setValue, clearErrors } = useForm({
    resolver: zodResolver(workExperienceSchema),
     defaultValues: {
      currently_work: false,
    },
  });

 const startDate = watch("start_date")
  const currentlyWork = watch("currently_work")

  useEffect(() => {
    if (startDate) {
      const endDate = watch("end_date")
      if (endDate && !currentlyWork) {
        trigger("end_date")
      }
    }
  }, [startDate, watch, trigger, currentlyWork])

  // Clear end_date when currently_work is checked
  useEffect(() => {
    if (currentlyWork) {
      setValue("end_date", "")
      clearErrors("end_date")
    }
  }, [currentlyWork, setValue, clearErrors])



  useEffect(()=> {
    if(!isLoading && isSuccess){
      setModalOpen(false)
    }
  }, [isLoading, isSuccess])


  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetProfileError(""))
    const { end_date, currently_work, ...rest } = data;
    if(currently_work){
      addWorkExperience({
        ...rest,
        currently_work
      })
    }
    else{
      addWorkExperience({
        ...rest,
        currently_work,
        end_date
      })
    }
  };



  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        type="button"
        className="w-full py-2 border border-dashed cursor-pointer rounded-md flex items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-300"
      >
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Work Experience
      </button>
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
        centered
        closable={false}
      >
        <div className="rounded-md">
          <div className="">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Add Work Experience</h3>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1 text-gray-500 rounded-full bg-gray-200 cursor-pointer hover:bg-primary hover:text-white duration-200"
              >
                <X className="h-6 w-6 text-2xl" />
                <span className="sr-only">Close</span>
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-2 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomInput
                  label="Job Title"
                  name="job_title"
                  type="text"
                  control={control}
                  placeholder="e.g. Software Engineer"
                />
                <CustomInput
                  label="Company Name"
                  name="company_name"
                  type="text"
                  control={control}
                  placeholder="e.g. Tech Solutions Ltd."
                />
              </div>
              <CustomInput
                label="Address"
                name="location"
                type="text"
                control={control}
                placeholder="Enter address"
              />

              <CustomDatePicker
                label="Start Date"
                name="start_date"
                control={control}
                placeholder="DD/MM/YYYY"
              />
              <CustomDatePicker
                label="End Date"
                name="end_date"
                control={control}
                placeholder="DD/MM/YYYY"
                disabled={currentlyWork}
              />
              <CustomCheckbox
                name="currently_work"
                label="I currently work here"
                control={control}
              />
              <CustomTextArea
                label="Description"
                name="details"
                control={control}
                placeholder="write here..."
                rows={3}
              />
            </div>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 w-full cursor-pointer border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 cursor-pointer py-2 w-full flex items-center justify-center gap-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <CgSpinnerTwo className="animate-spin" fontSize={16} />
                    Processing...
                  </>
                ) : (
                  "Save"
                )}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddWorkExperienceModal;
