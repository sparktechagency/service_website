import { z } from "zod";
import { fullNameRegex } from "./auth.schema";


export const employerPersonalSchema = z.object({
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
});