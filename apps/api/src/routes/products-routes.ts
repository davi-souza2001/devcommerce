import express from 'express'
import { PrismaProducts } from '../repositories/prisma/prisma-products'
import { SubmitProductService } from '../services/submit-product-service'

export const routesProducts = express.Router()

const prismaProducts = new PrismaProducts()

const submitProductsService = new SubmitProductService(prismaProducts)

routesProducts.post('/product/create', async (req, res) => {
	const { name, categorie, price } = req.body
	let image = req.body.image ?? ''

	try {
		await submitProductsService.executeCreate({
			name,
			categorie,
			price,
			image
		})

		return res.status(201).json({ message: 'Product created!' })

	} catch (error: any) {

		return res.status(401).json({ message: error.message })
	}
})
