import { prisma } from '../../prisma'
import { Cart, CartCreateData } from '../cart'

export class PrismaCart implements Cart {
	async create({ name, price, idUser, image }: CartCreateData): Promise<void> {
		await prisma.cart.create({
			data: {
				idUser,
				name,
				price,
				image
			}
		})
	}

	async get(idUser: string): Promise<CartCreateData[] | null> {
		// @ts-ignore
		const cart: CartCreateData[] | null = await prisma.cart.findMany({
			where: {
				idUser
			}
		})

		return cart
	}

	async delete(id: string): Promise<void> {
		await prisma.cart.delete({
			where: {
				id
			}
		})
	}
}
