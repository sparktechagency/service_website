/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import LocationMap from "@/components/Location/LocationMap";
import CustomDatePicker from "@/components/form/CustomDatePicker";
import CustomInput from "@/components/form/CustomInput";
import CustomSelect from "@/components/form/CustomSelect";
import CustomTextArea from "@/components/form/CustomTextArea";
import {
  educationOptions,
  experienceOptions,
  patternOptions,
  rateOptions,
  typeOptions,
} from "@/data/job.options";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import { useCreateJobMutation } from "@/redux/features/job/jobApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import { createJobSchema } from "@/schemas/job.schema";
import { TEmployerJob } from "@/types/job.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";
import { z } from "zod";

type TFormValues = z.infer<typeof createJobSchema>;


type TProps = {
  job: TEmployerJob;
}

const EditJobForm = ({ job }: TProps) => {
  useGetCategoriesQuery(undefined);
  const coordinates = job?.locations?.coordinates;
  const initialLongitude = coordinates[0];
  const initialLatitude = coordinates[1];
  const [selectedLocation, setSelectedLocation] = useState<number[]>([
    initialLongitude,
    initialLatitude,
  ]);
  const { categoryOptions } = useAppSelector((state) => state.category);
  const [createJob, { isLoading, isSuccess }] = useCreateJobMutation();

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    clearErrors,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createJobSchema),
    defaultValues: {
      title: job?.title,
      types: job?.types,
      category: job?.category?._id,
      experience: job?.experience,
      education: job?.education,
      skill: job?.skill?.join(', '),
      salary: job?.salary ? String(job?.salary) : "",
      rate: job?.rate ? job?.rate : "",
      vacancies: job?.vacancies ? String(job?.vacancies) : "",
      application_dateline: job?.application_dateline.split("T")[0],
      job_pattern: job?.job_pattern,
      address: job?.address,
      descriptions: job?.descriptions,
      latitude: initialLatitude.toString(),
      longitude: initialLongitude.toString(),
    },
  });

  // Update the salary watching logic and add rate clearing
  const salary = watch("salary");
  const rate = watch("rate");

  useEffect(() => {
    if (salary && !rate) {
      setError("rate", {
        type: "manual",
        message: "Rate is required when salary is provided",
      });
    } else {
      clearErrors("rate");
    }
  }, [salary, rate, setError, clearErrors]);

  // Clear rate when salary becomes empty
  useEffect(() => {
    if (!salary || salary === "") {
      setValue("rate", "");
    }
  }, [salary, setValue]);

  // Update the disabled logic - rate should be disabled only when salary is empty
  const isRateDisabled = !salary || salary === "" || Boolean(errors?.salary);

  // Watch the latitude and longitude values
  const latitude = watch("latitude");
  const longitude = watch("longitude");

  // Update map when coordinates change in form
  useEffect(() => {
    if (latitude && longitude) {
      const lat = parseFloat(latitude);
      const lng = parseFloat(longitude);
      if (!isNaN(lat) && !isNaN(lng)) {
        setSelectedLocation([lat, lng]);
      }
    }
  }, [latitude, longitude]);

  // Handle location selection from map
  const handleLocationSelect = (location: number[]) => {
    setSelectedLocation(location);
    setValue("latitude", location[0].toFixed(6));
    setValue("longitude", location[1].toFixed(6));
  };


  //if success
  useEffect(()=> {
    if(!isLoading && isSuccess){
      reset();
    }
  }, [isLoading, isSuccess, reset, setValue])



  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    const { skill, salary, rate, longitude, latitude, ...rest } = data;
    const finalValues:any = {
      ...rest,
      skill: skill.split(",").map((s) => s.trim()),
      location: {
        longitude,
        latitude,
      },
    };

    if(salary && rate){
      finalValues.salary= salary;
      finalValues.rate= rate;
    }
    createJob(finalValues);
   
  };

  return (
    <>
      <div className="flex-1 overflow-auto">
        <div className="max-6xl mx-auto p-4 sm:p-6 rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Edit job</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white px-4 py-6 rounded-md space-y-4"
          >
            <CustomInput
              label="Job Title"
              name="title"
              type="text"
              control={control}
              placeholder="e.g. CNC Machinist, Maintenance Engineer"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CustomSelect
                label="Type"
                name="types"
                control={control}
                options={typeOptions}
              />
              <CustomSelect
                label="Category"
                name="category"
                control={control}
                options={categoryOptions}
              />
            </div>

            <div className="mt-8 mb-4">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Advance Information
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <CustomSelect
                  label="Education"
                  name="education"
                  control={control}
                  options={educationOptions}
                />
                <CustomSelect
                  label="Experience"
                  name="experience"
                  control={control}
                  options={experienceOptions}
                />
                <div className="col-span-2">
                  <CustomTextArea
                    label="Skills (technical or soft skills, Comma Separated)"
                    name="skill"
                    control={control}
                    placeholder="e.g. CNC Programming, TIG Welding"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomInput
                  label="Salary(Optional)"
                  name="salary"
                  type="text"
                  control={control}
                  placeholder="e.g. 400"
                  onInput={(e: any) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                />
                <CustomSelect
                  label="Rate"
                  name="rate"
                  control={control}
                  options={rateOptions}
                  disabled={isRateDisabled}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <CustomInput
                  label="Vacancy"
                  name="vacancies"
                  type="text"
                  control={control}
                  placeholder="Enter vacancy"
                  onInput={(e: any) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                />
                <CustomDatePicker
                  label="Expiration Date"
                  name="application_dateline"
                  control={control}
                  placeholder="DD/MM/YYYY"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <CustomSelect
                  label="Job Pattern"
                  name="job_pattern"
                  control={control}
                  options={patternOptions}
                />

                <CustomInput
                  label="Address"
                  name="address"
                  type="text"
                  control={control}
                  placeholder="Enter address"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 h-[350px] lg:h-[400px] mb-6">
              <LocationMap
                onLocationSelect={handleLocationSelect}
                selectedLocation={selectedLocation}
              />
            </div>

            <div className="mb-6">
              <CustomTextArea
                label="Description"
                name="descriptions"
                control={control}
                placeholder="write a description about the job..."
                rows={3}
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center cursor-pointer justify-center gap-2 bg-primary text-white py-2 rounded-md hover:bg-dis transition disabled:bg-gray-800 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <CgSpinnerTwo className="animate-spin" fontSize={16} />
                    Processing...
                  </>
                ) : (
                  "Post Job"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditJobForm;
