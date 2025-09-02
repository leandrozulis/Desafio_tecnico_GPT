import z from "zod";

export const getJwt = z.object({
  token: z.string()
})

export type GetJwt = z.infer<typeof getJwt>