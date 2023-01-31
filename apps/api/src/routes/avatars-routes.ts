import express from 'express'
import { PrismaAvatars } from '../repositories/prisma/prisma-avatars'
import { SubmitAvatarService } from '../services/submit-avatar-service'

export const routesAvatar = express.Router()

const prismaAvatars = new PrismaAvatars()

const submitAvatarService = new SubmitAvatarService(prismaAvatars)

routesAvatar.post('/avatar/create', async (req, res) => {
	const {
		accessory,
		body,
		circleColor,
		clothing,
		clothingColor,
		eyebrows,
		eyes,
		faceMask,
		facialHair,
		graphic,
		hair,
		hairColor,
		hat,
		hatColor,
		idUser,
		lipColor,
		mouth,
		skinTone
	} = req.body

	try {
		await submitAvatarService.executeCreate({
			accessory,
			body,
			circleColor,
			clothing,
			clothingColor,
			eyebrows,
			eyes,
			faceMask,
			facialHair,
			graphic,
			hair,
			hairColor,
			hat,
			hatColor,
			idUser,
			lipColor,
			mouth,
			skinTone
		})

		return res.status(201).json({ message: 'Avatar created!' })

	} catch (error: any) {

		return res.status(401).json({ message: error.message })
	}
})

routesAvatar.post('/avatar/get', async (req, res) => {
	const { id } = req.body

	try {
		const avatar = await submitAvatarService.executeGet(id)

		return res.status(201).json(avatar)

	} catch (error: any) {

		return res.status(401).json({ message: error.message })
	}
})
