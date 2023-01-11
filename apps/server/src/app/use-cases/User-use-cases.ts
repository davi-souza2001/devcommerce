import { Injectable } from "@nestjs/common/decorators"
import { UserRepository } from "../repositories/user-repositories"
import { AvatarProps, User } from "../entities/user"

interface CreateUserRequest {
	email: string
	name: string
	avatar?: AvatarProps
}

interface CreateUserResponse {
	user: User
}

@Injectable()
export class UserCases {
	constructor(private userRepository: UserRepository) { }

	async create(request: CreateUserRequest): Promise<CreateUserResponse> {
		const { email, name } = request

		const user = new User({ email, name })

		await this.userRepository.create(user)

		return {
			user
		}
	}

	async login(email: string): Promise<User | any> {

		return await this.userRepository.login(email)
	}
}
