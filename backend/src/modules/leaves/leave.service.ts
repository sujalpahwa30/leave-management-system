import { prisma } from "../../lib/prisma";
import { CreateLeaveDto } from "./leave.types";

export const leaveService = {
  async createLeave(userId: number, data: CreateLeaveDto) {
    const leave = await prisma.leave.create({
      data: {
        userId,
        leaveType: data.leaveType,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        reason: data.reason,
      },
    });

    return leave;
  },
};