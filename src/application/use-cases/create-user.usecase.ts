import { User } from "../entities/User";
import { RepositoryUser } from "../repositories/User.repository";
import { hash } from 'bcrypt'
import { ErrorAlreadyExists } from "./Errors/AlreadyExists.error";
import { ErrorPasswordShort } from "./Errors/PasswordShort.error";

interface createUserRequest {
  name: string
  email: string
  password: string
}

interface createUserResponse {
  user: User
}

export class UseCaseCreateUser {
  constructor(
    private repUser: RepositoryUser
  ) { }

  async execute({ name, email, password }: createUserRequest): Promise<createUserResponse> {

    const validateEmail = await this.repUser.getByEmail(email);

    if (validateEmail) throw new ErrorAlreadyExists('E-mail');

    if (password.length < 6) throw new ErrorPasswordShort();

    const passwordHashed = await hash(password, 6)

    const user = new User({
      name,
      email,
      password: passwordHashed
    })

    await this.repUser.create(user)

    return {
      user
    }
  }
}