import { describe, it, expect } from 'vitest'

import { SubmitProductService } from '../services/submit-product-service'
import { ProductsMock } from './data/product-mock'

const submitProduct = new SubmitProductService(new ProductsMock())

describe('Tests for products', () => {
	it('Should not be able to submit a new product without name', () => {

		expect(submitProduct.executeCreate({
			name: '',
			category: 'test',
			price: 1.00,
			image: 'test'
		})).rejects.toThrow()
	})

	it('Should not be able to submit a new product without category', () => {

		expect(submitProduct.executeCreate({
			name: 'test',
			category: '',
			price: 1.00,
			image: 'test'
		})).rejects.toThrow()
	})

	it('Should not be able to submit a new product without price', () => {

		expect(submitProduct.executeCreate({
			name: 'test',
			category: 'test',
			price: 0,
			image: 'test'
		})).rejects.toThrow()
	})

	it('Should be able to submit a new product without image', () => {
		expect(submitProduct.executeCreate({
			name: 'test',
			category: 'test',
			price: 0
		})).rejects.toThrow()
	})

	it('Should be able to submit a new product', () => {

		expect(submitProduct.executeCreate({
			name: 'test',
			category: 'test',
			price: 1.00,
			image: 'test'
		})).toBeTruthy()
	})

	it('Should be able to get a products', () => {

		expect(submitProduct.executeGet()).toBeTruthy()
	})
})
