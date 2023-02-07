import { describe, it, expect } from 'vitest'

import { SubmitUserService } from '../services/submit-user-service'
import { UsersMock } from './data/user-mock'

const submitUser = new SubmitUserService(new UsersMock())

describe('Tests for users', () => {
	it('Should not be able to submit a user without name', async () => {

		await expect(submitUser.executeCreate({
			email: '123@teste.com',
			name: '',
		})).rejects.toThrow()
	})

	it('Should not be able to submit a user without name have length more than 3', async () => {

		await expect(submitUser.executeCreate({
			email: '123@teste.com',
			name: '12',
		})).rejects.toThrow()
	})

	it('Should not be able to submit a user without email', async () => {

		await expect(submitUser.executeCreate({
			email: '',
			name: 'teste',
		})).rejects.toThrow()
	})

	it('Should not be able to submit a user without email have the character @', async () => {

		await expect(submitUser.executeCreate({
			email: 'dfs',
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

	it('Should not be able to edit a user without a name', async () => {

		await expect(submitUser.executeEditUser({
			email: '123@teste.com',
			name: '',
		})).rejects.toThrow()
	})

	it('Should not be able to edit a user without a email', async () => {

		await expect(submitUser.executeEditUser({
			email: '',
			name: 'asdasd',
		})).rejects.toThrow()
	})

	it('Should not be able to edit a user without name have length more than 3', async () => {

		await expect(submitUser.executeEditUser({
			email: 'asdsa@sd',
			name: 'as',
		})).rejects.toThrow()
	})

	it('Should not be able to edit a user without email have the character @', async () => {

		await expect(submitUser.executeEditUser({
			email: 'dfs',
			name: 'teste',
		})).rejects.toThrow()
	})

	it('Should be able to edit a user', async () => {

		await expect(submitUser.executeEditUser({
			email: 'dfasds@asd',
			name: 'teste',
		})).toBeTruthy()
	})
})
