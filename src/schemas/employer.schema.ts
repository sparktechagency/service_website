import { z } from "zod";
import { fullNameRegex } from "./auth.schema";

export const employerPersonalSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Name must be string",
      required_error: "Name is required",
    })
    .trim()
    .min(1, "Name is required")
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
    .trim()
    .min(1, "Address is required"),
});

export const companySchema = z.object({
  name: z
    .string({
      invalid_type_error: "Company Name must be string",
      required_error: "Company Name is required",
    })
    .trim()
    .min(1, "Company name is required")
    .regex(fullNameRegex, {
      message:
        "Company Name can only contain letters, spaces, apostrophes, hyphens, and dots.",
    }),
  employer_position: z
    .string({
      invalid_type_error: "Employer position must be string",
      required_error: "Employer position is required",
    })
    .trim()
    .min(1, "Employer position is required"),
  details: z
    .string({
      invalid_type_error: "Company Details must be string",
      required_error: "Company detail is required",
    })
    .trim()
    .min(1, "Company detail is required"),
});

export const socialLinkSchema = z.object({
  website: z
    .string()
    .trim()
    .or(z.literal("")) // allow empty string
    .refine((val) => val === "" || z.string().url().safeParse(val).success, {
      message: "Website must be a valid URL",
    })
    .optional(),
  linkedin: z
    .string()
    .trim()
    .or(z.literal(""))
    .refine((val) => val === "" || z.string().url().safeParse(val).success, {
      message: "LinkedIn must be a valid URL",
    })
    .optional(),
  instagram: z
    .string()
    .trim()
    .or(z.literal(""))
    .refine((val) => val === "" || z.string().url().safeParse(val).success, {
      message: "Instagram must be a valid URL",
    })
    .optional(),
  facebook: z
    .string()
    .trim()
    .or(z.literal(""))
    .refine((val) => val === "" || z.string().url().safeParse(val).success, {
      message: "Facebook must be a valid URL",
    })
    .optional(),
});
