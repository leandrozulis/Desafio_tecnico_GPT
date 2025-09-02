import { User } from "../../../application/entities/User"
import { User as users } from "../../../generated/prisma"

export class MappersUser {
  static toPrisma({ Id, Name, Email, Password, CreatedAt, UpdatedAt, ZipCodeId }: User) {
    return {
      id: Id,
      name: Name,
      email: Email,
      password: Password,
      createdAt: CreatedAt,
      updatedAt: UpdatedAt,
      zipCodeId: ZipCodeId
    }
  }

  static toDomain({ id, name, email, password, zipCodeId }: users): User {
    return new User({
      name,
      email,
      password,
      zipCodeId
    }, id)
  }
}