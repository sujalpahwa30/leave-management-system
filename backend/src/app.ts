import Fastify from "fastify";
import sensible from "@fastify/sensible";

import jwtPlugin from "./plugins/jwt";
import { authRoutes } from "./modules/auth/auth.routes";
import { leaveRoutes } from "./modules/leaves/leave.routes";

export const app = Fastify({
  logger: true,
});

app.register(sensible);

app.register(jwtPlugin);

app.register(authRoutes, {
  prefix: "/auth",
});

app.register(leaveRoutes, {
  prefix: "/leaves",
})