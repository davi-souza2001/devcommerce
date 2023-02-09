import express from 'express'
import { PrismaWishlist } from '../repositories/prisma/prisma-wishlists'
import { SubmitWishlistService } from '../services/submit-wishlist-service'

export const routesWishlist = express.Router()

const prismaWishlist = new PrismaWishlist()

const submitWishlistService = new SubmitWishlistService(prismaWishlist)

routesWishlist.post('/wishlist/create', async (req, res) => {
	const { name, category, price, idUser } = req.body
	let image = req.body.image ?? ''

	try {
		await submitWishlistService.executeCreate({
			name,
			idUser,
			category,
			price,
			image
		})

		return res.status(201).json({ message: 'Added to wishlist!' })

	} catch (error: any) {

		return res.status(401).json({ message: error.message })
	}
})

routesWishlist.post('/wishlist/get', async (req, res) => {
	const { idUser } = req.body

	try {
		const wishlist = await submitWishlistService.executeGet(idUser)

		return res.status(201).json(wishlist)

	} catch (error: any) {

		return res.status(401).json({ message: error.message })
	}
})
