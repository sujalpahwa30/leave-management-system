import { FastifyInstance } from "fastify";

import { authenticate } from "../../middleware/auth.middleware";
import { leaveController } from "./leave.controller";

export async function leaveRoutes(
  fastify: FastifyInstance
) {
  fastify.post(
    "/",
    {
      preHandler: authenticate,
    },
    leaveController.createLeave
  );
}