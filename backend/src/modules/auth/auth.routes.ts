import { FastifyInstance } from "fastify";

import { authController } from "./auth.controller";

import { authenticate } from "../../middleware/auth.middleware";

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/login", authController.login);
  fastify.get("/me", { preHandler: [authenticate] }, authController.me);
}