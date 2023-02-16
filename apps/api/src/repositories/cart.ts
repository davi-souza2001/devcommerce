export interface CartCreateData {
	idUser: string
	name: string
	price: number
	image: string
}

export interface Cart {
	create: (data: CartCreateData) => Promise<void>
	get: (idUser: string) => Promise<CartCreateData[] | null>
	delete: (id: string) => Promise<void>
}
