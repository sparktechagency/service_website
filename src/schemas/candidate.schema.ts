import { z } from "zod";
import { fullNameRegex } from "./auth.schema";

export const candidatePersonalSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Name must be string",
      required_error: "Name is required",
    })
    .trim()
    .regex(fullNameRegex, {
      message:
        "Name can only contain letters, spaces, apostrophes, hyphens, and dots.",
    }),
  phone_number: z
    .string({
      invalid_type_error: "Phone Number must be string",
      required_error: "phone number is required",
    })
    .trim(),
  address: z
    .string({
      invalid_type_error: "Address must be string",
      required_error: "Address is required",
    })
    .min(1, "Address is required")
    .trim(),
});



export const candidateProfessionalSchema = z.object({
  job_title: z
    .string({
      invalid_type_error: "Job Title must be string",
      required_error: "At least one job title required"
    })
    .trim()
    .regex(/^([^,\n]+)(,\s*[^,\n]+)*$/, {
      message: "Please enter valid comma-separated skills",
  }),
  job_seeking: z
    .string({
      invalid_type_error: "Job Seeking Title must be string",
      required_error: "At least one job seeking title required"
    })
    .trim()
    .regex(/^([^,\n]+)(,\s*[^,\n]+)*$/, {
      message: "Please enter valid comma-separated skills",
  }),
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
    availability: z
    .string({
      invalid_type_error: "Availability must be string",
      required_error: "Select Availability",
    })
    .trim()
    .min(1, "Select Availability"),
  skill: z
    .string({
      invalid_type_error: "Skill must be string",
      required_error: "Skills required",
    })
    .trim()
    .regex(/^([^,\n]+)(,\s*[^,\n]+)*$/, {
      message: "Please enter valid comma-separated skills",
  }),
});


export const locationSchema = z.object({
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