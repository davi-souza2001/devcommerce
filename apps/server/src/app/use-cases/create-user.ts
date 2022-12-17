import { Injectable } from "@nestjs/common/decorators"
import { User } from "../entities/user"
import { UserRepository } from "../repositories/user-repositories"

interface CreateUserRequest {
    email: string
    name: string
    photo?: string
}

interface CreateUserResponse {
    user: User
}

@Injectable()
export class CreateUser {
    constructor(private userRepository: UserRepository) { }

    async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
        const { email, name, photo } = request

        const user = new User({
            email,
            name,
            photo
        })

        await this.userRepository.create(user)

        return {
            user
        }
    }
}