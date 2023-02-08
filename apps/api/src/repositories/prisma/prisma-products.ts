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

	async get(): Promise<ProductCreateData[] | null>{
		// @ts-ignore
		const product: ProductCreateData[] | null = await prisma.product.findMany()

		return product
	}
}
