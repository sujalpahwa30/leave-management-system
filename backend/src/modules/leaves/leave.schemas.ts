import { z } from "zod";

export const createLeaveSchema = z
  .object({
    leaveType: z.enum([
      "CASUAL",
      "SICK",
      "EARNED",
      "UNPAID",
    ]),

    startDate: z.string().date(),

    endDate: z.string().date(),

    reason: z
      .string()
      .trim()
      .min(10, "Reason must be at least 10 characters")
      .max(500),
  })
  .refine(
    (data) => new Date(data.endDate) >= new Date(data.startDate),
    {
      message: "End date cannot be before start date",
      path: ["endDate"],
    }
  );