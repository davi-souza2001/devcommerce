import { Injectable } from "@nestjs/common/decorators"
import { AvatarRepository } from "../repositories/avatar-repositories"
import { Avatar, AvatarProps } from "../entities/avatar"

@Injectable()
export class AvatarCases {
	constructor(private avatarRepository: AvatarRepository) { }

	async create(request: AvatarProps): Promise<void> {
		const avatarSent = request

		const avatar = new Avatar(avatarSent)

		await this.avatarRepository.create(avatar)

	}
}
