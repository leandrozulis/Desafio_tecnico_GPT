import z from "zod";

export const authenticateSchema = z.object({
  email: z.string(),
  password: z.string()
})

export type AuthenticateSchema = z.infer<typeof authenticateSchema>