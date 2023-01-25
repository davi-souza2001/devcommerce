import { prisma } from '../../prisma'
import { UserCreateData, Users } from '../users'

export class PrismaUsers implements Users {

	async create({ name, email }: UserCreateData) {
		await prisma.user.create({
			data: {
				email,
				name
			}
		})
	}
}
