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