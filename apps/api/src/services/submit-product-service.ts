import { Products } from '../repositories/product'

interface SubmitProductServiceRequest {
	name: string
	categorie: string
	price: number
	image?: string
}

export class SubmitProductService {
	constructor(
		private productsRepository: Products
	) { }

	async executeCreate(request: SubmitProductServiceRequest) {
		const { name, categorie, price } = request
		let image = request.image

		if (!name) {
			throw new Error('Name is required!')
		}

		if (!categorie) {
			throw new Error('Categorie is required!')
		}

		if (!price) {
			throw new Error('Price is required!')
		}

		if (!image) {
			image = ''
		}

		await this.productsRepository.create({ name, categorie, price, image })
	}
}
