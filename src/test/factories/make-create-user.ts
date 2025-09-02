import { SchemaUser } from "../../application/entities/User";

type UserSchemaMake = Partial<SchemaUser>

export function makeCreateUser(override: UserSchemaMake) {
  return {
    name: "Nome teste",
    email: "teste@teste.com",
    password: "123456",
    ...override
  }
}