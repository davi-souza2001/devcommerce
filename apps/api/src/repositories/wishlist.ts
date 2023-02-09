export interface WishlistCreateData {
	name: string
	idUser: string
	category: string
	price: number
	image: string
}

export interface Wishlist {
	create: (data: WishlistCreateData) => Promise<void>
	get: (idUser: string) => Promise<WishlistCreateData[] | null>
	delete: (id: string) => Promise<void>
}
