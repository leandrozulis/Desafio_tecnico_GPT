import { User } from "../../application/entities/User";
import { RepositoryUser } from "../../application/repositories/User.repository";

export class InMemoryUserRepository implements RepositoryUser {
  public users: User[] = []

  async create(user: User): Promise<void> {
    await this.users.push(user)
  }

  async getById(id: string): Promise<User | null> {
    const getId = await this.users.find((el) => el.Id === id)

    if (!getId) return null;

    return getId
  }

  async getByEmail(email: string): Promise<User | null> {
    const getEmail = await this.users.find((el) => el.Email === email)

    if (!getEmail) return null;

    return getEmail
  }

  async update(id: string, zipCode: string): Promise<void> {
    const getId = await this.users.find((el) => el.Id === id)

    if (getId) {
      getId.ZipCodeId = zipCode;
    }

  }
}