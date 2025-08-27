export class ErrorAlreadyExists extends Error {
  constructor(value?: string) {
    super(`${value} Already Exists!`)
  }
}