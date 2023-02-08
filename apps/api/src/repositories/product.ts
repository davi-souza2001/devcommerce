export interface ProductCreateData {
	name: string
	category: string
	price: number
	image: string
}

export interface Products {
	create: (data: ProductCreateData) => Promise<void>
	getByName: (name: string) => Promise<ProductCreateData | null>
	getByCategory: (category: string) => Promise<ProductCreateData[] | null>
}
