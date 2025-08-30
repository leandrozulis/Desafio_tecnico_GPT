import { RepositoryUser } from "../repositories/User.repository";
import { ErrorZipCodeIncorrect } from "./Errors/ZipCodeIncorrect.error"

interface zipCodeQueryRequest {
  cep: string,
  token: string
}

interface zipCodeQueryResponse {
  zipCode: string
}

export class UseCaseZipCodeQuery {

  constructor(
    private repUser: RepositoryUser
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