import { HttpZipCodeQuery } from "../../modules/middleware/zip-code-query";
import { ZipCode } from "../entities/ZipCode";
import { RepositoryUser } from "../repositories/User.repository";
import { RepositoryZipCode } from "../repositories/ZipCode.repository";
import { DoesNotExistsError } from "./Errors/DoesNotExists.error";

interface ZipCodeLinkUser {
  userId: string;
  cep: string;
}

interface ZipCodeLinkUserResponse {
  zipCodeResult: ZipCode;
}

export class UseCaseZipCodeLinkUser {
  constructor(
    private repZipCode: RepositoryZipCode,
    private repUser: RepositoryUser
  ) { }

  async execute({ userId, cep }: ZipCodeLinkUser): Promise<ZipCodeLinkUserResponse> {
    const findUser = await this.repUser.getById(userId);
    if (!findUser) {
      throw new DoesNotExistsError();
    }

    const http = new HttpZipCodeQuery();
    const { zipCode: responseCep }: any = await http.execute({ zipCode: cep });

    if (responseCep.erro === "true") {
      throw new Error("Invalid or non-existent zip code!");
    }

    const zipCodeResult = new ZipCode(
      {
        cep: responseCep.cep ?? null,
        logradouro: responseCep.logradouro ?? null,
        complemento: responseCep.complemento ?? null,
        unidade: responseCep.unidade ?? null,
        bairro: responseCep.bairro ?? null,
        localidade: responseCep.localidade ?? null,
        uf: responseCep.uf ?? null,
        estado: responseCep.estado ?? null,
        regiao: responseCep.regiao ?? null,
        ibge: responseCep.ibge ?? null,
        gia: responseCep.gia ?? null,
        ddd: responseCep.ddd ?? null,
        siafi: responseCep.siafi ?? null,
      },
      findUser.ZipCodeId ?? undefined
    );

    if (findUser.ZipCodeId) {
      await this.repZipCode.update(findUser.ZipCodeId, zipCodeResult)
    } else {
      await this.repZipCode.create(zipCodeResult);
      await this.repUser.update(userId, zipCodeResult.Id);
    }

    return { zipCodeResult };
  }
}