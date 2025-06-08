"use client";
import { Controller } from "react-hook-form";

type TProps = {
  label: string;
  name: string;
  control: any;
  type: string;
};

const CustomInput = ({ label, name, type = "text", control }: TProps) => {
  return (
    <>
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState: { error } }) => (
            <>
              <input
                type={type}
                {...field}
                value={field.value ?? ""}
                placeholder="you@example.com"
                className={`w-full mt-1 border focus:outline-none rounded-md px-4 py-2 pr-10 ${
                  error
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-blue-500"
                }`}
              />
              {error && (
                <p className="text-red-600 text-sm mt-1">{error.message}</p>
              )}
            </>
          )}
        />
      </div>
    </>
  );
};

export default CustomInput;
