import express from 'express'
import { PrismaCart } from '../repositories/prisma/prisma-cart'
import { SubmitCartService } from '../services/submit-cart-service'

export const routesCart = express.Router()

const prismaCart = new PrismaCart()

const submitCartService = new SubmitCartService(prismaCart)

routesCart.post('/cart/create', async (req, res) => {
	const { name, price, idUser } = req.body

	try {
		await submitCartService.executeCreate({
			name,
			idUser,
			price
		})

		return res.status(201).json({ message: 'Added to cart!' })

	} catch (error: any) {

		return res.status(401).json({ message: error.message })
	}
})

routesCart.post('/cart/get', async (req, res) => {
	const { idUser } = req.body

	try {
		const cart = await submitCartService.executeGet(idUser)

		return res.status(201).json(cart)

	} catch (error: any) {

		return res.status(401).json({ message: error.message })
	}
})

routesCart.post('/cart/delete', async (req, res) => {
	const { id } = req.body

	try {
		await submitCartService.executeDelete(id)

		return res.status(201).json({ message: 'Item deleted!' })

	} catch (error: any) {

		return res.status(401).json({ message: error.message })
	}
})
