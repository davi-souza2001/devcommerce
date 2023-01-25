import { prisma } from '../../prisma'
import { AvatarCreateData, Avatars } from '../avatars'

export class PrismaAvatars implements Avatars {

	async create({
		accessory,
		body,
		circleColor,
		clothing,
		clothingColor,
		eyebrows,
		eyes,
		faceMask,
		facialHair,
		graphic,
		hair,
		hairColor,
		hat,
		hatColor,
		idUser,
		lipColor,
		mouth,
		skinTone
	}: AvatarCreateData): Promise<void> {
		await prisma.avatar.create({
			data: {
				accessory,
				body,
				circleColor,
				clothing,
				clothingColor,
				eyebrows,
				eyes,
				faceMask,
				facialHair,
				graphic,
				hair,
				hairColor,
				hat,
				hatColor,
				idUser,
				lipColor,
				mouth,
				skinTone,
			}
		})
	}
}
