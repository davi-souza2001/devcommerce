import { Cart } from '../repositories/cart'

interface SubmitCartServiceRequest {
	idUser: string
	name: string
	price: number
}

export class SubmitCartService {
	constructor(
		private cartRepository: Cart
	) { }

	async executeCreate(request: SubmitCartServiceRequest) {
		const { name, price, idUser } = request

		if (!name) {
			throw new Error('Name is required!')
		}

		if (!idUser) {
			throw new Error('IdUser is required!')
		}

		if (!price) {
			throw new Error('Price is required!')
		}

		await this.cartRepository.create({ name, idUser, price })
	}

	async executeGet(idUser: string) {
		const cart = await this.cartRepository.get(idUser)

		return cart
	}

	async executeDelete(id: string) {
		await this.cartRepository.delete(id)
	}
}
