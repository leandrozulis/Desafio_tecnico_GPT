import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { UseCaseCreateUser } from "../application/use-cases/create-user.usecase";
import { RepositoryPrismaUser } from "../config/prisma/repository/user-prisma.repository";
import { ControllerUser } from "../modules/controllers/User/user.controller";

export function userRoutes(app: FastifyInstance) {

  const userPrismaRepository = new RepositoryPrismaUser()
  const useCaseCreateUser = new UseCaseCreateUser(userPrismaRepository)
  const controllerUser = new ControllerUser(useCaseCreateUser);

  app.post('/create', async (req: FastifyRequest, reply: FastifyReply) => {
    await controllerUser.create(req, reply)
  })
}