import { makeCreateUser } from "../../../test/factories/make-create-user"
import { InMemoryUserRepository } from "../../../test/repositories/in-memory-user-repository"
import { UseCaseAuthenticate } from "../authenticate.usecase"
import { hash } from "bcrypt"
import { UseCaseCreateUser } from "../create-user.usecase"

let sut: UseCaseAuthenticate
let createUser: UseCaseCreateUser
let inMemoryUserRepository: InMemoryUserRepository


describe('Authenticate Use Case', () => {

  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    createUser = new UseCaseCreateUser(inMemoryUserRepository)
    sut = new UseCaseAuthenticate(inMemoryUserRepository)
  })

  it('Should be able to authenticate user', async () => {

    const makeUser = makeCreateUser({
      password: await hash("123456", 6)
    })

    let { user } = await createUser.execute(makeUser)
    await inMemoryUserRepository.create(user)

    expect(async () => {
      await sut.execute({
        email: makeUser.email,
        password: makeUser.password
      })
    })

  })

})