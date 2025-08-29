import { FastifyInstance } from "fastify";
import { userRoutes } from "./user.routes";
import { authenticateRoute } from "./authenticate.routes";

export async function allRoutes(app: FastifyInstance) {
  app.register(authenticateRoute)
  app.register(userRoutes)
}