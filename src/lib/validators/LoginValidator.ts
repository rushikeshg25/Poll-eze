import { z } from "zod";

export const LoginValidation =z.object(
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
        
  })
  


  export type LoginValidationSchema = z.infer<typeof LoginValidation>;