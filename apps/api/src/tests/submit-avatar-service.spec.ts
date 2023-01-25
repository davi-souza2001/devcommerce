import { describe, it, expect } from 'vitest'

import { SubmitAvatarService } from '../services/submit-avatar-service'
import { AvatarsMock } from './data/avatar-mock'

const submitAvatar = new SubmitAvatarService(new AvatarsMock())

describe('Tests for avatars', () => {
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

})
