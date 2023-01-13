import { Avatar } from "./avatar"

describe('Create avatar', () => {
	test('it should be able to create a new avatar', () => {
		const avatar = new Avatar({
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
