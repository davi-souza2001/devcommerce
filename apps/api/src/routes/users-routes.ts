import express from 'express'
import { PrismaUsers } from '../repositories/prisma/prisma-users'
import { SubmitUserService } from '../services/user/submit-user-service'

export const routesUser = express.Router()

const prismaUsers = new PrismaUsers()

const submitUserService = new SubmitUserService(prismaUsers)

routesUser.post('/user/create', async (req, res) => {
	const { name, email } = req.body

	try {
		await submitUserService.executeCreate({
			name,
			email
		})

		return res.status(201).json({ message: 'User created!' })

	} catch (error: any) {

		return res.status(401).json({ message: error.message })
	}
})

routesUser.post('/user/login', async (req, res) => {
	const { email } = req.body

	try {
		const user = await submitUserService.executeLogin(email)

		return res.status(201).json(user)

	} catch (error: any) {

		return res.status(401).json({ message: error.message })
	}
})
