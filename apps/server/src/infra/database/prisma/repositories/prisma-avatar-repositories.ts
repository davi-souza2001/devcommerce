import { Injectable } from "@nestjs/common/decorators";
import { Avatar } from "src/app/entities/avatar";
import { AvatarRepository } from "src/app/repositories/avatar-repositories";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaAvatarRepository implements AvatarRepository {
	constructor(private prismaService: PrismaService) { }

	async create(avatar: Avatar): Promise<void> {
		await this.prismaService.avatar.create({
			data: {
				accessory: avatar.accessory,
				body: avatar.body,
				circleColor: avatar.circleColor,
				clothing: avatar.clothing,
				clothingColor: avatar.clothingColor,
				eyebrows: avatar.eyebrows,
				eyes: avatar.eyes,
				faceMask: avatar.faceMask,
				facialHair: avatar.facialHair,
				graphic: avatar.graphic,
				hair: avatar.hair,
				hairColor: avatar.hairColor,
				hat: avatar.hat,
				hatColor: avatar.hatColor,
				id: avatar.id,
				lipColor: avatar.lipColor,
				mouth: avatar.mouth,
				skinTone: avatar.skinTone,
				idUser: avatar.idUser
			}
		})
	}

}
