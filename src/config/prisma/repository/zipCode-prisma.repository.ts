import { ZipCode } from "../../../application/entities/ZipCode";
import { RepositoryZipCode } from "../../../application/repositories/ZipCode.repository";
import { prisma } from "../../config";
import { MappersZipCode } from "../mappers/zipCode.mappers";

export class RepositoryZipCodePrisma implements RepositoryZipCode {
  async create(code: ZipCode): Promise<void> {
    const zipCode = MappersZipCode.toPrisma(code)

    await prisma.zipCode.create({
      data: zipCode
    })
  }

  async update(id: string, datas: ZipCode): Promise<void> {

    const newZipCode = MappersZipCode.toPrisma(datas)

    await prisma.zipCode.update({
      where: {
        id
      },
      data: newZipCode
    })
  }
}