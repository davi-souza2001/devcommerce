import { Wishlist, WishlistCreateData } from "../../repositories/wishlist"

export class WishlistMock implements Wishlist {
	private wishlist: WishlistCreateData[] = []

	async create({ category, idUser, image, name, price }: WishlistCreateData): Promise<void> {
		if (name && price && category && idUser && image) {
			this.wishlist.push({ category, idUser, image, name, price })
		}
	}

	async get(idUser: string): Promise<WishlistCreateData[] | null> {
		if (this.wishlist.length !== 0) {
			return this.wishlist.filter(wishlist => wishlist.idUser === idUser)
		} else {
			return null
		}
	}

	async delete(id: string): Promise<void> {
		this.wishlist.filter(wishlist => wishlist.idUser === id)
	}
}
