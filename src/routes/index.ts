import { FastifyInstance } from "fastify";
import { userRoutes } from "./user.routes";
import { authenticateRoute } from "./authenticate.routes";
import { routesZipCode } from "./zipCode.routes";

export async function allRoutes(app: FastifyInstance) {
  app.register(authenticateRoute)
  app.register(userRoutes)
  app.register(routesZipCode)
}