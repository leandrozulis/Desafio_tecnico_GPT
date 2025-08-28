import { User } from "../entities/User";

export interface RepositoryUser {
  create(user: User): Promise<void>
  getById(id: string): Promise<User | null>
  getByEmail(email: string): Promise<User | null>
}