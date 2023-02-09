import { prisma } from '../../prisma'
import { Wishlist, WishlistCreateData } from '../wishlist'

export class PrismaWishlist implements Wishlist {
	async create({ name, category, price, image, idUser }: WishlistCreateData): Promise<void> {
		await prisma.wishlist.create({
			data: {
				name,
				idUser,
				category,
				price,
				image
			}
		})
	}

	async get(idUser: string): Promise<WishlistCreateData[] | null>{
		// @ts-ignore
		const wishlist: WishlistCreateData[] | null = await prisma.wishlist.findMany({
			where: {
				idUser
			}
		})

		return wishlist
	}

	async delete(id: string): Promise<void>{
		await prisma.wishlist.delete({
			where: {
				id
			}
		})
	}
}
