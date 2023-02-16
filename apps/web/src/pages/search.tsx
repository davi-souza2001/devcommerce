import { useEffect, useState } from "react"
import { HiSearch } from "react-icons/hi"

import { BackgroundField } from "../components/BackgroundField"
import { CardField } from "../components/CardField"
import { NamePageField } from "../components/NamePageField"
import { TopBar } from "../components/TopBarField"
import { Product } from "../service/context/ProductContext"
import UseProduct from "../service/hook/useProduct"

export default function Search() {
	const { product } = UseProduct()
	const [productsSearch, setProductsSearch] = useState<Product[]>([])
	const [search, setSearch] = useState('')

	useEffect(() => {
		if(search !== ''){
			product.map((product) => {
				if (product.name === search) {
					const searchName = productsSearch.find(pro => product.name === pro.name)
					!searchName && setProductsSearch(state => [...state, product])
				}
			})
		} else {
			setProductsSearch([])
		}
	}, [search])

	return (
		<BackgroundField>
			<TopBar />
			<NamePageField name="Search" />
			<div className="h-16 w-full  flex items-center justify-center">
				<div className="h-2/3 w-1/2 flex items-center justify-around bg-slate-100 rounded-md">
					<HiSearch className="h-1/2 w-16" />
					<input type="text" className="h-full w-full outline-none bg-slate-100 rounded-md" onChange={(e) => setSearch(e.target.value)} />
				</div>
			</div>
			<div className="w-full p-5 grid grid-cols-4">
				{productsSearch.length !== 0 && search !== '' ? productsSearch.map(product => {
					return (
						<CardField
							key={product.id}
							id={product.id}
							name={product.name}
							price={product.price}
							image={product.image}
							category={product.category}
							belongsWishlist={false}
						/>
					)
				}) : product?.map(product => {
					return (
						<CardField
							key={product.id}
							id={product.id}
							name={product.name}
							price={product.price}
							image={product.image}
							category={product.category}
							belongsWishlist={false}
						/>
					)
				})}
			</div>
		</BackgroundField>
	)
}
