import { z } from "zod";

export const SignupValidation =z.object(
    {
        username:z
        .string()
        .min(3, {
          message: 'Title must be at least 3 characters long',
        })
        .max(128, {
          message: 'Title must be less than 128 characters long',
        }),
        password: z.string().min(6, { message: "Password must be atleast 6 characters" }),
        confirmPassword: z.string().min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });


 export type SignupValidationSchema = z.infer<typeof SignupValidation>;

 