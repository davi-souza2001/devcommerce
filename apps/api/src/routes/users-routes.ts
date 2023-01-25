import express from 'express'
import { PrismaUsers } from '../repositories/prisma/prisma-users'
import { SubmitUserService } from '../services/user/submit-user-service'

export const routesUser = express.Router()

routesUser.post('/user/create', async (req, res) => {
	const { name, email } = req.body

	const prismaUsers = new PrismaUsers()

	const submitUserService = new SubmitUserService(prismaUsers)

	try {
		await submitUserService.executeCreate({
			name,
			email
		})

		return res.status(201)

	} catch (error: any) {

		return res.status(401).json({ message: error.message })
	}
})
