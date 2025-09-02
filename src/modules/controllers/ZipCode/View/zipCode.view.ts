import { ZipCode } from "../../../../application/entities/ZipCode";

export class ViewZipCode {

  static queryCep(zipCode: ZipCode) {
    return {
      cep: zipCode.Cep,
      logradouro: zipCode.Logradouro,
      complemento: zipCode.Complemento,
      unidade: zipCode.Unidade,
      bairro: zipCode.Bairro,
      localidade: zipCode.Localidade,
      uf: zipCode.Uf,
      estado: zipCode.Estado,
      regiao: zipCode.Regiao,
      ibge: zipCode.Ibge,
      gia: zipCode.Gia,
      ddd: zipCode.Ddd,
      siafi: zipCode.Siafi
    }
  }
}