import { FastifyReply, FastifyRequest } from "fastify";
import { UseCaseAuthenticate } from "../../../application/use-cases/authenticate.usecase";
import { authenticateSchema, AuthenticateSchema } from "./DTO/authenticate.dto";
import { ViewAuthenticate } from "./View/authenticate.view";

export class ControllerAuthenticate {
  constructor(
    private useCaseAuthenticate: UseCaseAuthenticate
  ) { }

  async login(req: FastifyRequest, reply: FastifyReply) {

    const { email, password }: AuthenticateSchema = authenticateSchema.parse(req.body)

    const { user } = await this.useCaseAuthenticate.execute({
      email, password
    })

    const signedToken = await reply.jwtSign({
      id: user.Id,
      name: user.Name,
      email: user.Email
    })

    return reply.status(200).send(
      ViewAuthenticate.authenticate(signedToken)
    )

  }
}