import { Injectable } from "@nestjs/common/decorators"
import { UserRepository } from "../repositories/user-repositories"
import { User } from "../entities/user"

interface CreateUserRequest {
    email: string
    name: string
    photo?: string
}

interface CreateUserResponse {
    user: User
}

@Injectable()
export class UserCases {
    constructor(private userRepository: UserRepository) { }

    async create(request: CreateUserRequest): Promise<CreateUserResponse> {
        const { email, name, photo } = request

        const user = new User({ email, name, photo })

        await this.userRepository.create(user)

        return {
            user
        }
    }

    async login(email: string): Promise<User | any> {

        return await this.userRepository.login(email)
    }
}