import { HttpZipCodeQuery } from "../../modules/middleware/zip-code-query";
import { ZipCode } from "../entities/ZipCode";
import { RepositoryZipCode } from "../repositories/ZipCode.repository";
import { ErrorZipCodeIncorrect } from "./Errors/ZipCodeIncorrect.error";

interface zipCodeQueryRequest {
  cep: string
}

interface zipCodeQueryResponse {
  zipCode: string
}

export class UseCaseZipCodeQuery {

  constructor(
    private repZipCode: RepositoryZipCode
  ) { }

  async execute({ cep }: zipCodeQueryRequest): Promise<zipCodeQueryResponse> {

    const regexCodeLetter = /[a-zA-Z]/;
    const regexCode = /\D/g;
    const validateCode = /^[0-9]{8}$/;

    if (regexCodeLetter.test(cep)) {
      throw new ErrorZipCodeIncorrect();
    }

    const zipCode = cep.replace(regexCode, "");

    if (!validateCode.test(zipCode)) {
      throw new ErrorZipCodeIncorrect();
    }

    return {
      zipCode
    }
  }

}