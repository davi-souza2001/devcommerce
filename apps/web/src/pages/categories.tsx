import { useEffect, useState } from "react";
import { BackgroundField } from "../components/BackgroundField";
import { BarCategoriesField } from "../components/BarCategoriesField";
import { CardField } from "../components/CardField";
import { NamePageField } from "../components/NamePageField";
import { TopBar } from "../components/TopBarField";
import { Product } from "../service/context/ProductContext";
import UseProduct from "../service/hook/useProduct";

export default function Categories() {
	const { product, filterBy } = UseProduct()
	const [productsByCategorie, setProductsByCategorie] = useState<Product[]>([])

	useEffect(() => {
		setProductsByCategorie(product.filter(prod => prod.category === filterBy))

	}, [filterBy, product])

	return (
		<BackgroundField>
			<TopBar />
			<NamePageField name="Categories" />
			<BarCategoriesField categories={['tech', 'toy', 'material', 'food']}/>
			<div className="w-full p-5 grid grid-cols-4">
				{productsByCategorie.map(product => {
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
