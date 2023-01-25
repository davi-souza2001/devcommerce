import { prisma } from '../../prisma'
import { UserCreateData, Users } from '../users'

export class PrismaUsers implements Users {

	async create({ name }: UserCreateData) {
		const user = await prisma.user.create({ name })
	}
}
