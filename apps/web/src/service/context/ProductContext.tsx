import { createContext, useEffect, useState } from "react"
import UseFetch from "../hook/useFetch"

interface Product {
	id: string
	name: string
	category: string
	price: number
	image: string
}

interface ProductContextProps {
	product: Product[]
}

const ProductContext = createContext<ProductContextProps>({
	product: []
})

export function ProductProvider(props: any) {
	const [product, setProduct] = useState([])

	useEffect(() => {
		UseFetch('http://localhost:3333/product/get', "GET")
		.then((products) => setProduct(products))
	}, [])

	return (
		<ProductContext.Provider value={{
			product
		}}>
			{props.children}
		</ProductContext.Provider>
	)

}

export default ProductContext
