import { User } from "../../../application/entities/User";
import { RepositoryUser } from "../../../application/repositories/User.repository";
import { prisma } from "../../config"
import { MappersUser } from "../mappers/user.mappers";

export class RepositoryPrismaUser implements RepositoryUser {

  async create(datas: User): Promise<void> {

    const user = MappersUser.toPrisma(datas)

    await prisma.user.create({
      data: user
    })
  }

  async getById(id: string): Promise<User | null> {

    const findId = await prisma.user.findUnique({
      where: {
        id
      }
    })

    if (!findId) {
      return null
    }

    return MappersUser.toDomain(findId)

  }

  async getByEmail(email: string): Promise<User | null> {
    const findEmail = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!findEmail) {
      return null
    }

    return MappersUser.toDomain(findEmail)
  }

  async update(id: string, zipCode: string): Promise<void> {

    console.log(id, zipCode)

    await prisma.user.update({
      where: { id },
      data: {
        zipCode: {
          connect: { id: zipCode }
        }
      }
    })
  }

}