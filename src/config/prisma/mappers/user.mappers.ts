import { User } from "../../../application/entities/User"
import { User as users } from "../../../generated/prisma"

export class MappersUser {
  static toPrisma({ Id, Name, Email, Password, CreatedAt, UpdatedAt }: User) {
    return {
      id: Id,
      name: Name,
      email: Email,
      password: Password,
      createdAt: CreatedAt,
      updatedAt: UpdatedAt
    }
  }

  static toDomain({ id, name, email, password }: users): User {
    return new User({
      name,
      email,
      password
    }, id)
  }
}