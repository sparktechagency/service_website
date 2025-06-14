import { z } from "zod";

export const createJobSchema = z.object({
  title: z
    .string({
      invalid_type_error: "Title must be string",
      required_error: "Title is required",
    })
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
    .min(1, "Select a category"),
});
