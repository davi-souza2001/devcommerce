import { User } from "../entities/user"
import { CreateUser } from "./create-user"

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
            id: 'example id',
            email: 'example email',
            name: 'example name',
            photo: 'example photo'
        })

        expect(user).toBeTruthy()
        expect(users).toHaveLength(1)
    })
})