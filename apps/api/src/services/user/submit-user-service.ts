import { Users } from '../../repositories/users'

interface SubmitUserServiceRequest {
	name: string
	email: string
}

export class SubmitUserService {
	constructor(
		private usersRepository: Users
	) { }

	async executeCreate(request: SubmitUserServiceRequest) {
		const { name, email } = request

		if (!name) {
			throw new Error('Name is required!')
		}

		if (!email) {
			throw new Error('Email is required!')
		}

		await this.usersRepository.create({ email, name })
	}
}
