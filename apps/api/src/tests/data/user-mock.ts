import { UserCreateData, Users } from "../../repositories/users";

export class UsersMock implements Users {
	private users: UserCreateData[] = []

	async create({ name, email }: UserCreateData) {
		if (name && email) {
			this.users.push({ name, email })
		}
	}
}
