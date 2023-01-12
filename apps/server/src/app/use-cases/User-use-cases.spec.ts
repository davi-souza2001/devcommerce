import { User } from "../entities/user"
import { UserCases } from "./User-use-cases"

const users: User[] = [new User({
	email: 'teste@email.com',
	name: 'teste'
})]

const userRepository = {
	async create(user: User) {
		users.push(user)
	},
	async login(email: string) {
		const user = users.find((user) => user.email === email)

		return user
	}
}

describe('Use case: create a new User', () => {
	test('it should be able to create a new user', async () => {
		const userEntitie = new UserCases(userRepository)

		const { user } = await userEntitie.create({
			email: 'example email',
			name: 'example name'
		})

		expect(user).toBeTruthy()
		expect(users).toHaveLength(1)
	})

	test('it should be able to login a user', async () => {
		const userEntitie = new UserCases(userRepository)

		const { user } = await userEntitie.login('teste@email.com')

		expect(user).toBeTruthy()
	})
})
