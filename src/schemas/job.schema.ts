import { z } from "zod";

export const createJobSchema = z.object({
  title: z
    .string({
      invalid_type_error: "Title must be string",
      required_error: "Title is required",
    })
    .trim()
    .min(1, "Title is required"),
  types: z
    .string({
      invalid_type_error: "Type must be string",
      required_error: "Select a type",
    })
    .min(1, "Select a type"),
  category: z
    .string({
      invalid_type_error: "Category must be string",
      required_error: "Select a category",
    })
    .trim()
    .min(1, "Select a category"),
  education: z
    .string({
      invalid_type_error: "Education must be string",
      required_error: "Select education",
    })
    .trim()
    .min(1, "Select education"),
  experience: z
    .string({
      invalid_type_error: "Experience must be string",
      required_error: "Select experience",
    })
    .trim()
    .min(1, "Select experience"),
  skill: z
    .string({
      invalid_type_error: "Skill must be string",
      required_error: "Skills required",
    })
    .trim()
    .regex(/^([^,\n]+)(,\s*[^,\n]+)*$/, {
      message: "Please enter valid comma-separated skills",
    }),
  salary: z
    .string({
      invalid_type_error: "Salary must be a string",
      required_error: "Salary is required",
    })
    .trim()
    .transform((val) => (val === "" ? undefined : val)) // 👈 convert empty to undefined
    .optional()
    .refine((val) => val === undefined || /^\d+$/.test(val), {
      message: "Salary must be a number",
    })
    .transform((val) => (val === undefined ? undefined : Number(val)))
    .refine((val) => val === undefined || val > 0, {
      message: "Salary must be at least 1",
    }),
  rate: z
    .string({
      invalid_type_error: "rate must be string",
      required_error: "Select rate",
    })
    .trim()
    .optional(),
  vacancies: z
    .string({
      invalid_type_error: "Vacancy must be a number",
      required_error: "Vacancy is required",
    })
    .trim()
    .transform((val) => (val === "" ? undefined : val)) // 👈 convert empty to undefined
    .refine((val) => val === undefined || /^\d+$/.test(val), {
      message: "Vacancy must be a number",
    })
    .transform((val) => (val === undefined ? undefined : Number(val)))
    .refine((val) => val === undefined || val > 0, {
      message: "Vacancy must be at least 1",
    }),
  application_dateline: z
    .string({
      invalid_type_error: "Expiration date must be string",
      required_error: "Select expiration date",
    })
    .trim()
    .min(1, "Select expiration date"),
  job_pattern: z
    .string({
      invalid_type_error: "Job Pattern must be string",
      required_error: "Select Job Pattern",
    })
    .trim()
    .min(1, "Select Job Pattern"),
  address: z
    .string({
      invalid_type_error: "Address must be string",
      required_error: "Address is required",
    })
    .trim()
    .min(1, "Address is required"),
  descriptions: z
    .string({
      invalid_type_error: "Description must be string",
      required_error: "Description is required",
    })
    .trim()
    .min(1, "Description is required"),
  longitude: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => val >= -180, {
      message: "Longitude must be >= -180",
    })
    .refine((val) => val <= 180, {
      message: "Longitude must be <= 180",
    }),
  latitude: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => val >= -90, {
      message: "Latitude must be >= -90",
    })
    .refine((val) => val <= 90, {
      message: "Latitude must be <= 90",
    }),
});
