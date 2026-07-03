import bcrypt from "bcrypt";
import { FastifyInstance } from "fastify";

import { prisma } from "../../lib/prisma";
import { LoginDto } from "./auth.types";

export const authService = {
  async login(data: LoginDto, fastify: FastifyInstance) {
    // Find user by email
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw fastify.httpErrors.unauthorized(
        "Invalid email or password"
      );
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(
      data.password,
      user.password
    );

    if (!isPasswordValid) {
      throw fastify.httpErrors.unauthorized(
        "Invalid email or password"
      );
    }

    // Generate JWT
    const accessToken = fastify.jwt.sign(
      {
        userId: user.id,
        role: user.role,
      },
      {
        expiresIn: "24h",
      }
    );

    // Return sanitized user
    return {
      accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        department: user.department,
        role: user.role,
      },
    };
  },
};