import { UserCreateData, Users } from "../../repositories/users"

export class UsersMock implements Users {
	private users: UserCreateData[] = []

	async create({ name, email }: UserCreateData) {
		if (name && email) {
			this.users.push({ name, email })
		}
	}

	async login(email: string) {
		const user = this.users.find(user => user.email === email) ?? {
			email: 'teste@gmail',
			name: 'teste'
		}

		return user
	}
}
