export class PasswordError extends Error {
  constructor() {
    super("E-mail or Password doesn't correct!")
  }
}