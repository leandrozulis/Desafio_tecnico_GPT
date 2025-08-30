import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ControllerAuthenticate } from "../modules/controllers/Authenticate/authenticate.controller";
import { RepositoryPrismaUser } from "../config/prisma/repository/user-prisma.repository";
import { UseCaseAuthenticate } from "../application/use-cases/authenticate.usecase";

export function authenticateRoute(app: FastifyInstance) {

  const repositoryUser = new RepositoryPrismaUser()
  const useCaseAuth = new UseCaseAuthenticate(repositoryUser)
  const controllerAuth = new ControllerAuthenticate(useCaseAuth)

  app.post('/login', async (req: FastifyRequest, reply: FastifyReply) => {
    await controllerAuth.login(req, reply)
  })

}