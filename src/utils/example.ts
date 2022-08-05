import { z } from "zod";

export type DTO = z.infer<typeof userSchema>;
/*
    type DTO = {
        description?: string | undefined;
        id: string;
        name: string;
        participants: {
            id: string;
            name: string;
            email: string;
        }[];
    }
*/
export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  participants: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
    })
  ),
});
