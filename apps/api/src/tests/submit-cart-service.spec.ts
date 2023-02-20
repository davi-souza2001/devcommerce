import { describe, it, expect } from 'vitest'

import { SubmitCartService } from '../services/submit-cart-service'
import { CartMock } from './data/cart-mock'

const submitCart = new SubmitCartService(new CartMock())

describe('Tests for cart', () => {
	it('Should not be able to submit a cart without name', async () => {

		await expect(submitCart.executeCreate({
			idUser: 'test',
			name: '',
			price: 2,
			image: 'test'
		})).rejects.toThrow()
	})

	it('Should not be able to submit a cart without idUser', async () => {

		await expect(submitCart.executeCreate({
			idUser: '',
			name: 'test',
			price: 2,
			image: 'test'
		})).rejects.toThrow()
	})

	it('Should not be able to submit a cart without price', async () => {

		await expect(submitCart.executeCreate({
			idUser: 'test',
			name: 'test',
			price: 0,
			image: 'test'
		})).rejects.toThrow()
	})

	it('Should be able to submit a cart without image', async () => {

		await expect(submitCart.executeCreate({
			idUser: 'test',
			name: 'test',
			price: 2,
			image: ''
		})).toBeTruthy()
	})

	it('Should not be able to submit a cart without price', async () => {

		await expect(submitCart.executeCreate({
			idUser: 'test',
			name: 'test',
			price: 0,
			image: 'test'
		})).rejects.toThrow()
	})



	it('Should be able to submit a new cart', async () => {

		await expect(submitCart.executeCreate({
			idUser: 'test',
			name: 'test',
			price: 2,
			image: 'test'
		})).toBeTruthy()
	})

	it('Should be able to get a cart', async () => {

		await expect(submitCart.executeGet('test')).toBeTruthy()
	})

	it('Should be able to delete a cart', async () => {

		await expect(submitCart.executeDelete('test')).toBeTruthy()
	})
})
