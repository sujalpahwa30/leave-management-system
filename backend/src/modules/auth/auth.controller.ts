import { FastifyReply, FastifyRequest } from "fastify";

import { authService } from "./auth.service";
import { LoginDto } from "./auth.types";

export const authController = {
  async login(
    request: FastifyRequest<{ Body: LoginDto }>,
    reply: FastifyReply
  ) {
    const result = await authService.login(request.body, request.server);

    return reply.status(200).send({
      success: true,
      message: "Login successful",
      data: result,
    });
  },
};