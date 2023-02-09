import { Wishlist } from '../repositories/wishlist'

interface SubmitWishlistServiceRequest {
	name: string
	idUser: string
	category: string
	price: number
	image?: string
}

export class SubmitWishlistService {
	constructor(
		private wishlistRepository: Wishlist
	) { }

	async executeCreate(request: SubmitWishlistServiceRequest) {
		const { name, category, price, idUser } = request
		let image = request.image

		if (!name) {
			throw new Error('Name is required!')
		}

		if (!idUser) {
			throw new Error('IdUser is required!')
		}

		if (!category) {
			throw new Error('Categorie is required!')
		}

		if (!price) {
			throw new Error('Price is required!')
		}

		if (!image) {
			image = ''
		}

		await this.wishlistRepository.create({ name, idUser, category, price, image })
	}

	async executeGet(idUser: string) {
		const wishlist = await this.wishlistRepository.get(idUser)

		return wishlist
	}

	async executeDelete(id: string){
		await this.wishlistRepository.delete(id)
	}
}
