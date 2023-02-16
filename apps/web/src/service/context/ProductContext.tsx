import { createContext, useEffect, useState } from "react"
import UseFetch from "../hook/useFetch"

export interface Product {
	id: string
	name: string
	category: string
	price: number
	image: string
}

interface ProductContextProps {
	product: Product[]
	filterBy: string
	setFilterBy: (filter: string) => void
}

const ProductContext = createContext<ProductContextProps>({
	product: [],
	filterBy: '',
	setFilterBy: () => {}
})

export function ProductProvider(props: any) {
	const [product, setProduct] = useState<Product[]>([])
	const [filterBy, setFilterBy] = useState('tech')

	useEffect(() => {
		UseFetch('http://localhost:3333/product/get', "GET")
		.then((products) => setProduct(products))
	}, [])

	return (
		<ProductContext.Provider value={{
			product,
			filterBy,
			setFilterBy
		}}>
			{props.children}
		</ProductContext.Provider>
	)

}

export default ProductContext
