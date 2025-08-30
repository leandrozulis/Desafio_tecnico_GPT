import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ControllerZipCodeQuery } from "../modules/controllers/ZipCode/zip-Code-Query.controller";
import { verifyJWT } from "../modules/middleware/verifyAuthenticate";
import { UseCaseZipCodeQuery } from "../application/use-cases/zip-code-query.usecase";
import { HttpZipCodeQuery } from "../modules/controllers/ZipCode/Http/zip-code-query.http";

export function routesZipCode(app: FastifyInstance) {

  const useCaseZipCode = new UseCaseZipCodeQuery()
  const httpZipCode = new HttpZipCodeQuery()
  const controllerZipCode = new ControllerZipCodeQuery(useCaseZipCode, httpZipCode)

  app.post('/consultacep', { onRequest: [verifyJWT] }, async (req: FastifyRequest, reply: FastifyReply) => {
    await controllerZipCode.query(req, reply)
  })

}