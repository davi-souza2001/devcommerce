import { Body, Controller, Post } from '@nestjs/common'
import { AvatarCases } from 'src/app/use-cases/Avatar-use-cases'

@Controller()
export class AvatarController {
	constructor(private useCases: AvatarCases) { }

	@Post('avatar/create')
	async create(@Body() bodyRequest: any) {
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
			lipColor,
			mouth,
			skinTone,
			idUser
		} = bodyRequest

		console.log(bodyRequest)

		await this.useCases.create({
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
			lipColor,
			mouth,
			skinTone,
			idUser
		})
	}
}
