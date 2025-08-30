import z from "zod";

export const zipCodeSchema = z.object({
  cep: z.string()
})

export type ZipCodeSchema = z.infer<typeof zipCodeSchema>