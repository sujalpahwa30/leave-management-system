import "@fastify/jwt";

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: {
      userId: number;
      role: "EMPLOYEE" | "MANAGER";
    };

    user: {
      userId: number;
      role: "EMPLOYEE" | "MANAGER";
    };
  }
}