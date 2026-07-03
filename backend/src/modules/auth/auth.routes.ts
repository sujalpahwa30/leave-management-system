import { FastifyInstance } from "fastify";

import { authController } from "./auth.controller";

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/login", authController.login);
}