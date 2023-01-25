import { Users } from '../../repositories/users'

interface SubmitUserServiceRequest {
	name: string
}

export class SubmitUserService {
	constructor(
		private usersRepository: Users
	) { }

	async executeCreate(request: SubmitUserServiceRequest) {
		const { name } = request

		if (!name) {
			throw new Error('Name is required!')
		}

		const user = await this.usersRepository.create({ name })
	}
}
