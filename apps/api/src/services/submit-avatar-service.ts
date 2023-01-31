import { Avatars } from '../repositories/avatars'

interface SubmitAvatarServiceRequest {
	idUser: string
	accessory: string
	body: string
	circleColor: string
	clothing: string
	clothingColor: string
	eyebrows: string
	eyes: string
	faceMask: boolean
	facialHair: string
	graphic: string
	hair: string
	hairColor: string
	hat: string
	hatColor: string
	lipColor: string
	mouth: string
	skinTone: string
}

export class SubmitAvatarService {
	constructor(
		private avatarsRepository: Avatars
	) { }

	async executeCreate(request: SubmitAvatarServiceRequest) {
		const {
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
		} = request

		if (!idUser) {
			throw new Error('User is required!')
		}

		if (!body) {
			throw new Error('Body is required!')
		}

		if (!clothing) {
			throw new Error('Clothing is required!')
		}

		await this.avatarsRepository.create({
			accessory: accessory ?? '',
			body,
			circleColor: circleColor ?? '',
			clothing,
			clothingColor: clothingColor ?? '',
			eyebrows: eyebrows ?? '',
			eyes: eyes ?? '',
			faceMask: faceMask ?? false,
			facialHair: facialHair ?? '',
			graphic: graphic ?? '',
			hair: hair ?? '',
			hairColor: hairColor ?? '',
			hat: hat ?? '',
			hatColor: hatColor ?? '',
			idUser,
			lipColor: lipColor ?? '',
			mouth: mouth ?? '',
			skinTone: skinTone ?? ''
		})
	}

	async executeGet(id: string) {
		if (!id) {
			throw new Error('Id is required!')
		}

		const avatar = await this.avatarsRepository.get(id)

		return avatar

	}
}
