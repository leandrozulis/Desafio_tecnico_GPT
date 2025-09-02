import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ControllerZipCodeQuery } from "../modules/controllers/ZipCode/zip-Code-Query.controller";
import { verifyJWT } from "../modules/middleware/verifyAuthenticate";
import { UseCaseZipCodeQuery } from "../application/use-cases/zip-code-query.usecase";
import { RepositoryZipCodePrisma } from "../config/prisma/repository/zipCode-prisma.repository";
import { RepositoryPrismaUser } from "../config/prisma/repository/user-prisma.repository";
import { UseCaseZipCodeLinkUser } from "../application/use-cases/zip-code-and-user-link.usecase";

export function routesZipCode(app: FastifyInstance) {

  const zipCodePrismaRepository = new RepositoryZipCodePrisma()
  const userPrismaRepository = new RepositoryPrismaUser()
  const useCaseZipCode = new UseCaseZipCodeQuery(zipCodePrismaRepository)
  const useCaseZipCodeLinkUser = new UseCaseZipCodeLinkUser(zipCodePrismaRepository, userPrismaRepository)
  const controllerZipCode = new ControllerZipCodeQuery(useCaseZipCode, useCaseZipCodeLinkUser)

  app.post('/consultacep', { onRequest: [verifyJWT] }, async (req: FastifyRequest, reply: FastifyReply) => {
    await controllerZipCode.query(req, reply)
  })

}