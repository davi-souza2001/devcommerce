import { prisma } from '../../prisma'
import { ProductCreateData, Products } from '../product'

export class PrismaProducts implements Products {

	async create({ name, categorie, price, image }: ProductCreateData): Promise<void> {
		await prisma.product.create({
			data: {
				name,
				categorie,
				price,
				image
			}
		})
	}

}
