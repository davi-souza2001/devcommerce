export interface CartCreateData {
	idUser: string
	name: string
	price: number
}

export interface Cart {
	create: (data: CartCreateData) => Promise<void>
	get: (idUser: string) => Promise<CartCreateData[] | null>
	delete: (id: string) => Promise<void>
}
