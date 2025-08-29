import { User } from "../../../../application/entities/User";

export class ViewUser {

  static createUser(user: User) {
    return {
      name: user.Name,
      email: user.Email
    }
  }
}