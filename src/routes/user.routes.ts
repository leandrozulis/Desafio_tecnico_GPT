import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ControllerUser } from "../modules/controllers/user.controller";
import { RepositoryPrismaUser } from "../config/prisma/repository/user-prisma.repository";
import { UseCaseCreateUser } from "../application/use-cases/create-user.usecase";

export function userRoutes(app: FastifyInstance) {

  const userPrismaRepository = new RepositoryPrismaUser()
  const useCaseCreateUser = new UseCaseCreateUser(userPrismaRepository)
  const controllerUser = new ControllerUser(useCaseCreateUser);

  app.post('/create', async (req: FastifyRequest, reply: FastifyReply) => {
    await controllerUser.create(req, reply)
  })
}