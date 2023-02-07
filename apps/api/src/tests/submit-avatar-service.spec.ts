import { describe, it, expect } from 'vitest'

import { SubmitAvatarService } from '../services/submit-avatar-service'
import { AvatarsMock } from './data/avatar-mock'

const submitAvatar = new SubmitAvatarService(new AvatarsMock())

describe('Tests for avatars', () => {
	it('Should not be able to submit a avatar without idUser', async () => {

		await expect(submitAvatar.executeCreate({
			accessory: 'asdsad',
			body: 'asdsad',
			circleColor: 'asdsad',
			clothing: 'asdsad',
			clothingColor: 'asdsad',
			eyebrows: 'asdsad',
			eyes: 'asdsad',
			faceMask: false,
			facialHair: 'asdsad',
			graphic: 'asdsad',
			hair: 'asdsad',
			hairColor: 'asdsad',
			hat: 'asdsad',
			hatColor: 'asdsad',
			idUser: '',
			lipColor: 'asdsad',
			mouth: 'asdsad',
			skinTone: 'asdsad',
		})).rejects.toThrow()
	})

	it('Should not be able to submit a avatar without body', async () => {

		await expect(submitAvatar.executeCreate({
			accessory: 'asdsad',
			body: '',
			circleColor: 'asdsad',
			clothing: 'asdsad',
			clothingColor: 'asdsad',
			eyebrows: 'asdsad',
			eyes: 'asdsad',
			faceMask: false,
			facialHair: 'asdsad',
			graphic: 'asdsad',
			hair: 'asdsad',
			hairColor: 'asdsad',
			hat: 'asdsad',
			hatColor: 'asdsad',
			idUser: 'asdasd',
			lipColor: 'asdsad',
			mouth: 'asdsad',
			skinTone: 'asdsad',
		})).rejects.toThrow()
	})

	it('Should not be able to submit a avatar without clothing', async () => {

		await expect(submitAvatar.executeCreate({
			accessory: 'asdsad',
			body: 'asdsa',
			circleColor: 'asdsad',
			clothing: '',
			clothingColor: 'asdsad',
			eyebrows: 'asdsad',
			eyes: 'asdsad',
			faceMask: false,
			facialHair: 'asdsad',
			graphic: 'asdsad',
			hair: 'asdsad',
			hairColor: 'asdsad',
			hat: 'asdsad',
			hatColor: 'asdsad',
			idUser: 'asdasd',
			lipColor: 'asdsad',
			mouth: 'asdsad',
			skinTone: 'asdsad',
		})).rejects.toThrow()
	})

	it('Should be able to submit a avatar have only accessory, clothing and iduser', async () => {

		await expect(submitAvatar.executeCreate({
			body: 'asdsa',
			clothing: 'asd',
			idUser: 'asdasd',
		} as any)).toBeTruthy()
	})

	it('Should be able to submit a avatar ', async () => {

		await expect(submitAvatar.executeCreate({
			accessory: 'asdsad',
			body: 'asdsad',
			circleColor: 'asdsad',
			clothing: 'asdsad',
			clothingColor: 'asdsad',
			eyebrows: 'asdsad',
			eyes: 'asdsad',
			faceMask: false,
			facialHair: 'asdsad',
			graphic: 'asdsad',
			hair: 'asdsad',
			hairColor: 'asdsad',
			hat: 'asdsad',
			hatColor: 'asdsad',
			idUser: 'asdsad',
			lipColor: 'asdsad',
			mouth: 'asdsad',
			skinTone: 'asdsad'
		})).toBeTruthy()
	})

	it('Should not be able to get a avatar without a idUser', async () => {

		await expect(submitAvatar.executeGet('')).rejects.toThrow()
	})

	it('Should be able to get a avatar', async () => {

		await expect(submitAvatar.executeGet('asdsa')).toBeTruthy()
	})
})
