import { Avatar } from "../entities/avatar"
import { AvatarCases } from "./Avatar-use-cases"

const avatars: Avatar[] = [new Avatar({
	accessory: 'teste',
	idUser: 'teste',
	body: 'teste',
	circleColor: 'teste',
	clothing: 'teste',
	clothingColor: 'teste',
	eyebrows: 'teste',
	eyes: 'teste',
	faceMask: false,
	facialHair: 'teste',
	graphic: 'teste',
	hair: 'teste',
	hairColor: 'teste',
	hat: 'teste',
	hatColor: 'teste',
	lipColor: 'teste',
	mouth: 'teste',
	skinTone: 'teste'
})]

const avatarRepository = {
	async create(avatar: Avatar) {
		avatars.push(avatar)
	}
}

describe('Use case: create a new Avatar', () => {
	test('it should be able to create a new avatar', async () => {
		const avatarEntitie = new AvatarCases(avatarRepository)

		const avatar = await avatarEntitie.create({
			accessory: 'teste',
			idUser: 'teste',
			body: 'teste',
			circleColor: 'teste',
			clothing: 'teste',
			clothingColor: 'teste',
			eyebrows: 'teste',
			eyes: 'teste',
			faceMask: false,
			facialHair: 'teste',
			graphic: 'teste',
			hair: 'teste',
			hairColor: 'teste',
			hat: 'teste',
			hatColor: 'teste',
			lipColor: 'teste',
			mouth: 'teste',
			skinTone: 'teste'
		})

		expect(avatar).toBeTruthy()
	})
})
