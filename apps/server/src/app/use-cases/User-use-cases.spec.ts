import { User } from "../entities/user"
import { CreateUser } from "./User-use-cases"

const users: User[] = []

const userRepository = {
    async create(user: User) {
        users.push(user)
    }
}

describe('Use case: create a new User', () => {
    test('it should be able to create a new user', async () => {
        const createUser = new CreateUser(userRepository)

        const { user } = await createUser.execute({
            email: 'example email',
            name: 'example name',
            photo: 'example photo'
        })

        expect(user).toBeTruthy()
        expect(users).toHaveLength(1)
    })
})