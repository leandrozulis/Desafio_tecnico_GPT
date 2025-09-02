import { FastifyReply, FastifyRequest } from "fastify";
import { UseCaseCreateUser } from "../../../application/use-cases/create-user.usecase";
import { UserSchema, userSchema } from "./DTO/user.dto";
import { ViewUser } from "./View/user.view";

export class ControllerUser {

  constructor(
    private useCaseCreateUser: UseCaseCreateUser
  ) { }

  async create(req: FastifyRequest, reply: FastifyReply) {

    try {
      const { name, email, password }: UserSchema = userSchema.parse(req.body)

      const { user } = await this.useCaseCreateUser.execute({
        name, email, password
      })

      return reply.status(201).send({
        user: ViewUser.createUser(user)
      })
    } catch (error) {
      return reply.status(500).send({
        message: 'Internal Error, consult your provider for more details!',
        err: error
      })
    }


  }

}