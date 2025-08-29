export class DoesNotExistsError extends Error {
  constructor() {
    super(`User Doesn't Exist!`)
  }
}