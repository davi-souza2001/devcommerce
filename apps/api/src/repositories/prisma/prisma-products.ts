import { prisma } from '../../prisma'
import { ProductCreateData, Products } from '../product'

export class PrismaProducts implements Products {

	async create({ name, category, price, image }: ProductCreateData): Promise<void> {
		await prisma.product.create({
			data: {
				name,
				category,
				price,
				image
			}
		})
	}

	async getByName(name: string): Promise<ProductCreateData | null> {
		const product = await prisma.product.findFirst({
			where: {
				name
			}
		}) as ProductCreateData | null

		return product
	}

	async getByCategory(category: string): Promise<ProductCreateData[] | null> {
		// @ts-ignore
		const product = await prisma.product.findMany({
			where: {
				category
			}
		}) as ProductCreateData[] | null

		return product
	}
}
