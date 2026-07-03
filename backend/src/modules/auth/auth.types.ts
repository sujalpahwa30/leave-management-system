import { z } from "zod";
import { loginSchema } from "./auth.schemas";

export type LoginDto = z.infer<typeof loginSchema>;