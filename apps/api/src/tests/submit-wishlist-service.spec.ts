import { describe, it, expect } from 'vitest'

import { SubmitWishlistService } from '../services/submit-wishlist-service'
import { WishlistMock } from './data/wishlist-mock'

const submitWishlist = new SubmitWishlistService(new WishlistMock())

describe('Tests for wishlist', () => {
	it('Should not be able to submit a wishlist without name', async () => {

		await expect(submitWishlist.executeCreate({
			category: 'test',
			idUser: 'test',
			name: '',
			price: 2,
			image: 'test'
		})).rejects.toThrow()
	})

	it('Should not be able to submit a wishlist without category', async () => {

		await expect(submitWishlist.executeCreate({
			category: '',
			idUser: 'test',
			name: 'test',
			price: 2,
			image: 'test'
		})).rejects.toThrow()
	})

	it('Should not be able to submit a wishlist without idUser', async () => {

		await expect(submitWishlist.executeCreate({
			category: 'test',
			idUser: '',
			name: 'test',
			price: 2,
			image: 'test'
		})).rejects.toThrow()
	})

	it('Should not be able to submit a wishlist without price', async () => {

		await expect(submitWishlist.executeCreate({
			category: 'test',
			idUser: 'test',
			name: 'test',
			price: 0,
			image: 'test'
		})).rejects.toThrow()
	})

	it('Should be able to submit a wishlist without image', async () => {

		await expect(submitWishlist.executeCreate({
			category: 'test',
			idUser: 'test',
			name: 'test',
			price: 2,
			image: ''
		})).toBeTruthy()
	})

	it('Should be able to submit a wishlist', async () => {

		await expect(submitWishlist.executeCreate({
			category: 'test',
			idUser: 'test',
			name: 'test',
			price: 2,
			image: 'test'
		})).toBeTruthy()
	})

	it('Should be able to get a wishlist', async () => {

		await expect(submitWishlist.executeGet('test')).toBeTruthy()
	})

	it('Should be able to delete a wishlist', async () => {

		await expect(submitWishlist.executeDelete('test')).toBeTruthy()
	})
})
