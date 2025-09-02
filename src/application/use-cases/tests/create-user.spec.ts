import { makeCreateUser } from "../../../test/factories/make-create-user"
import { InMemoryUserRepository } from "../../../test/repositories/in-memory-user-repository"
import { UseCaseCreateUser } from "../create-user.usecase"

let sut: UseCaseCreateUser
let inMemoryUserRepository: InMemoryUserRepository


describe('Create User Use Case', () => {

  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    sut = new UseCaseCreateUser(inMemoryUserRepository)
  })

  it('Should be able to create user', async () => {

    const makeUser = makeCreateUser({})

    const { user } = await sut.execute(makeUser)

    await inMemoryUserRepository.create(user)

    expect(inMemoryUserRepository.users[0]).toEqual(user)

  })

})