import { FastifyReply, FastifyRequest } from "fastify";
import { zipCodeSchema, ZipCodeSchema } from "./DTO/zipCode.dto";
import { UseCaseZipCodeQuery } from "../../../application/use-cases/zip-code-query.usecase";
import { HttpZipCodeQuery } from "./Http/zip-code-query.http";
import { ViewZipCode } from "./View/zipCode.view";

export class ControllerZipCodeQuery {

  constructor(
    private usecaseZipCodeQuery: UseCaseZipCodeQuery,
    private httpZipCode: HttpZipCodeQuery
  ) { }

  async query(req: FastifyRequest, reply: FastifyReply) {

    try {
      const { cep }: ZipCodeSchema = zipCodeSchema.parse(req.body)

      const { zipCode } = await this.usecaseZipCodeQuery.execute({
        cep
      })

      const responseCep = await this.httpZipCode.execute({ zipCode });

      if (responseCep.erro === 'true') {
        return reply.status(400).send({
          message: 'Invalid or non-existent zip code!'
        })
      }

      return reply.status(200).send({
        cep: ViewZipCode.queryCep(responseCep)
      })
    } catch (error: any) {
      return reply.status(500).send({
        message: 'Internal Error, consult your provider for more details!'
      })
    }

  }

}