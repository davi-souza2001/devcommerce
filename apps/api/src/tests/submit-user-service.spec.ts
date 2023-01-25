import { describe, it, expect } from 'vitest'

import { SubmitUserService } from '../services/user/submit-user-service'
import { UsersMock } from './data/user-mock'

const submitUser = new SubmitUserService(new UsersMock())

describe('Tests for users', () => {
	it('Should not be able to submit a user without name', async () => {

		await expect(submitUser.executeCreate({
			email: '123@teste.com',
			name: '',
		})).rejects.toThrow()
	})

	it('Should not be able to submit a user without email', async () => {

		await expect(submitUser.executeCreate({
			email: '',
			name: 'teste',
		})).rejects.toThrow()
	})

	it('Should be able to submit a user', async () => {

		await expect(submitUser.executeCreate({
			email: '123@teste.com',
			name: 'teste',
		})).toBeTruthy()
	})

	it('Should not be able to login a user without email', async () => {

		await expect(submitUser.executeLogin('')).rejects.toThrow()
	})

	it('Should be able to login a user', async () => {

		await expect(submitUser.executeLogin('teste@gmail.com')).toBeTruthy()
	})
})
