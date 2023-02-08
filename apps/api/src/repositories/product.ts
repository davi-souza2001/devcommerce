export interface ProductCreateData {
	name: string
	category: string
	price: number
	image: string
}

export interface Products {
	create: (data: ProductCreateData) => Promise<void>
	get: () => Promise<ProductCreateData[] | null>
}
