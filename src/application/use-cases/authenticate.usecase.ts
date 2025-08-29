import { RepositoryUser } from "../repositories/User.repository";
import { DoesNotExistsError } from "./Errors/DoesNotExists.error";
import { compare } from 'bcrypt'
import { PasswordError } from "./Errors/PasswordError.error";
import { User } from "../entities/User";

interface AuthenticateRequest {
  email: string
  password: string
}

interface AuthenticateResponse {
  user: User
}

export class UseCaseAuthenticate {
  constructor(
    private repUser: RepositoryUser
  ) { }

  async execute({ email, password }: AuthenticateRequest): Promise<AuthenticateResponse> {

    const user = await this.repUser.getByEmail(email)

    if (!user) {
      throw new DoesNotExistsError()
    }

    const doesPasswordMatched = await compare(password, user.Password)

    if (!doesPasswordMatched) {
      throw new PasswordError()
    }

    return {
      user
    }
  }
}