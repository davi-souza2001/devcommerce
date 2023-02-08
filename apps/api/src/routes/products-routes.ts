import express from 'express'
import { PrismaProducts } from '../repositories/prisma/prisma-products'
import { SubmitProductService } from '../services/submit-product-service'

export const routesProducts = express.Router()

const prismaProducts = new PrismaProducts()

const submitProductsService = new SubmitProductService(prismaProducts)

routesProducts.post('/product/create', async (req, res) => {
	const { name, category, price } = req.body
	let image = req.body.image ?? ''

	try {
		await submitProductsService.executeCreate({
			name,
			category,
			price,
			image
		})

		return res.status(201).json({ message: 'Product created!' })

	} catch (error: any) {

		return res.status(401).json({ message: error.message })
	}
})

routesProducts.post('/product/getByName', async (req, res) => {
	let name = req.body.name

	try {
		const product = await submitProductsService.executeGetByName(name)

		return res.status(201).json(product)

	} catch (error: any) {

		return res.status(401).json({ message: error.message })
	}
})

routesProducts.post('/product/getByCategory', async (req, res) => {
	let category = req.body.category

	try {
		const product = await submitProductsService.executeGetByCategory(category)

		return res.status(201).json(product)

	} catch (error: any) {

		return res.status(401).json({ message: error.message })
	}
})
