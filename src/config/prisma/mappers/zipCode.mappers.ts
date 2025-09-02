import { ZipCode } from "../../../application/entities/ZipCode"
import { ZipCode as zipCodes } from "../../../generated/prisma"

export class MappersZipCode {
  static toPrisma({ Id, Cep, Logradouro, Complemento, Unidade, Bairro, Localidade, Uf, Estado, Regiao, Ibge, Gia, Ddd, Siafi }: ZipCode) {
    return {
      id: Id,
      cep: Cep ?? undefined,
      logradouro: Logradouro ?? undefined,
      complemento: Complemento ?? undefined,
      unidade: Unidade ?? undefined,
      bairro: Bairro ?? undefined,
      localidade: Localidade ?? undefined,
      uf: Uf ?? undefined,
      estado: Estado ?? undefined,
      regiao: Regiao ?? undefined,
      ibge: Ibge ?? undefined,
      gia: Gia ?? undefined,
      ddd: Ddd ?? undefined,
      siafi: Siafi ?? undefined,
    };
  }

  static toDomain({ cep, logradouro, complemento, unidade, bairro, localidade, uf, estado, regiao, ibge, gia, ddd, siafi, id }: zipCodes): ZipCode {
    return new ZipCode({
      cep: cep ?? undefined,
      logradouro: logradouro ?? undefined,
      complemento: complemento ?? undefined,
      unidade: unidade ?? undefined,
      bairro: bairro ?? undefined,
      localidade: localidade ?? undefined,
      uf: uf ?? undefined,
      estado: estado ?? undefined,
      regiao: regiao ?? undefined,
      ibge: ibge ?? undefined,
      gia: gia ?? undefined,
      ddd: ddd ?? undefined,
      siafi: siafi ?? undefined,
    }, id)
  }
}