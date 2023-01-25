import express from 'express'
import { PrismaUsers } from '../repositories/prisma/prisma-users'
import { SubmitUserService } from '../services/user/submit-user-service'

export const routesUser = express.Router()

routesUser.post('/user/create', async (req, res) => {
	const { name } = req.body

	const prismaUsers = new PrismaUsers()

	const submitUserService = new SubmitUserService(prismaUsers)

	try {
		const user = await submitUserService.executeCreate({
			name
		})

	} catch (error: any) {

		return res.status(401).json({ message: error.message })
	}
})
