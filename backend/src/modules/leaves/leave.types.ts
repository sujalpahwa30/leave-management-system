import { z } from "zod";
import { createLeaveSchema } from "./leave.schemas";

export type CreateLeaveDto =
  z.infer<typeof createLeaveSchema>;