export interface ProductCreateData {
	name: string
	categorie: string
	price: number
	image: string
}

export interface Products {
	create: (data: ProductCreateData) => Promise<void>
}
