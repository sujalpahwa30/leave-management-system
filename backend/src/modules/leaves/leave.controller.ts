import { FastifyReply, FastifyRequest } from "fastify";

import { leaveService } from "./leave.service";
import { CreateLeaveDto } from "./leave.types";

export const leaveController = {
  async createLeave(
    request: FastifyRequest<{ Body: CreateLeaveDto }>,
    reply: FastifyReply
  ) {
    const user = request.user as {
      userId: number;
      role: string;
    };

    const leave = await leaveService.createLeave(
      user.userId,
      request.body
    );

    return reply.status(201).send({
      success: true,
      message: "Leave request submitted successfully.",
      data: leave,
    });
  },
};