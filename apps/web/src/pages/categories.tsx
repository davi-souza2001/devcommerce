import { BackgroundField } from "../components/BackgroundField";
import { CardField } from "../components/CardField";
import { NamePageField } from "../components/NamePageField";
import { TopBar } from "../components/TopBar";
import UseProduct from "../service/hook/useProduct";

export default function Categories() {
	const { product } = UseProduct()

	return (
		<BackgroundField>
			<TopBar />
			<NamePageField name="Categories" />
			<div className="h-10 w-full flex items-center justify-around border-b-4 border-slate-300">
				<div className="h-10 w-16 flex items-center justify-center cursor-pointer font-semibold border-b-4 border-purple-500">
					<p>Tech</p>
				</div>
				<div className="h-10 w-16 flex items-center justify-center cursor-pointer font-semibold border-b-4 border-purple-500">
					<p>Tech</p>
				</div>
				<div className="h-10 w-16 flex items-center justify-center cursor-pointer font-semibold border-b-4 border-purple-500">
					<p>Tech</p>
				</div>
				<div className="h-10 w-16 flex items-center justify-center cursor-pointer font-semibold border-b-4 border-purple-500">
					<p>Tech</p>
				</div>
			</div>
			<div className="w-full p-5 grid grid-cols-4">
				{product?.map(product => {
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
