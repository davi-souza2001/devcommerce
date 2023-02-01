import { prisma } from '../../prisma'
import { UserCreateData, Users } from '../users'

export class PrismaUsers implements Users {

	async create({ name, email }: UserCreateData): Promise<void> {
		await prisma.user.create({
			data: {
				email,
				name
			}
		})
	}

	async login(email: string): Promise<UserCreateData | null> {
		const user = await prisma.user.findUnique({
			where: {
				email
			}
		})

		return user
	}

	async editUser(data: UserCreateData): Promise<void> {
		await prisma.user.update({
			where: {
				email: data.email
			},
			data: {
				name: data.name,
				email: data.email
			}
		})
	}
}
