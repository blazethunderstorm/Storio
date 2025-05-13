import * as z from "zod";
export const signUpSchema = z.object({
    email:z.
        string()
        .email("Invalid email address")
        .min(1, "Email is required")
        .email("Invalid email address"),

    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters long"),
    
    passwordConfirmation: z
        .string()
        .min(1, "Password confirmation is required")  

}).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"],
});

            