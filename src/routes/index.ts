import { FastifyInstance } from "fastify";
import { userRoutes } from "./user.routes";

export async function allRoutes(app: FastifyInstance) {
  app.register(userRoutes)
}