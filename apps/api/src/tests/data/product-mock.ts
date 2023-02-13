import { Products, ProductCreateData } from "../../repositories/product";

export class ProductsMock implements Products{
	private avatars: ProductCreateData[] = []

	async create(data: ProductCreateData): Promise<void>{
		if (!data.name) {
			throw new Error('Name is required!')
		}

		if (!data.category) {
			throw new Error('Categorie is required!')
		}

		if (!data.price) {
			throw new Error('Price is required!')
		}

		if (!data.image) {
			data.image = ''
		}

		this.avatars.push(data)
	}

	async get(): Promise<ProductCreateData[] | null>{
		return this.avatars
	}
}
