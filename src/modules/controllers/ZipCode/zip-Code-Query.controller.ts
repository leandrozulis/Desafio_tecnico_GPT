import { FastifyReply, FastifyRequest } from "fastify";
import { zipCodeSchema, ZipCodeSchema } from "./DTO/zipCode.dto";
import { UseCaseZipCodeQuery } from "../../../application/use-cases/zip-code-query.usecase";
import { ViewZipCode } from "./View/zipCode.view";
import { getJwt, GetJwt } from "../DTO-Global/getJwt.dto";
import { env } from "../../../.env";
import { verifyJWT } from "../../middleware/verifyAuthenticate";
import { UseCaseZipCodeLinkUser } from "../../../application/use-cases/zip-code-and-user-link.usecase";

export class ControllerZipCodeQuery {

  constructor(
    private usecaseZipCodeQuery: UseCaseZipCodeQuery,
    private useCaseZipCodeLinkUser: UseCaseZipCodeLinkUser
  ) { }

  async query(req: FastifyRequest, reply: FastifyReply) {

    try {
      const { cep }: ZipCodeSchema = zipCodeSchema.parse(req.body)

      const { zipCode } = await this.usecaseZipCodeQuery.execute({
        cep
      })

      const decodedJwt: any = await verifyJWT(req, reply);

      const { zipCodeResult } = await this.useCaseZipCodeLinkUser.execute({
        userId: decodedJwt.id,
        cep: zipCode
      })

      return reply.status(200).send({
        cep: ViewZipCode.queryCep(zipCodeResult)
      })
    } catch (error: any) {
      return reply.status(500).send({
        message: 'Internal Error, consult your provider for more details!',
        err: error
      })
    }

  }

}