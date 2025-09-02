import axios from "axios"
import { env } from "../../.env";

interface zipCodeRequest {
  zipCode: string
}

export class HttpZipCodeQuery {

  async execute({ zipCode }: zipCodeRequest) {

    const { data } = await axios.get(env.viacep + zipCode + '/json/');
    const response = data;
    return { zipCode: data };

  }

}