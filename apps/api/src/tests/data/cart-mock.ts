import { Cart, CartCreateData } from "../../repositories/cart"

export class CartMock implements Cart {
	private cart: CartCreateData[] = []

	async create({ idUser, image, name, price, }: CartCreateData): Promise<void> {
		if (name && price && idUser && image) {
			this.cart.push({ idUser, image, name, price })
		}
	}

	async get(idUser: string): Promise<CartCreateData[] | null> {
		if (this.cart.length !== 0) {
			return this.cart.filter(cart => cart.idUser === idUser)
		} else {
			return null
		}
	}

	async delete(id: string): Promise<void> {
		this.cart.filter(cart => cart.idUser === id)
	}
}
