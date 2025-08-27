export class ErrorPasswordShort extends Error {
  constructor() {
    super('Password too short, enter at least 6 characters')
  }
}