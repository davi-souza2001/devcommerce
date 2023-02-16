import UseProduct from "../service/hook/useProduct"

interface BarCategoriesProps {
	categories: string[]
}

export function BarCategoriesField(props: BarCategoriesProps) {
	const { filterBy, setFilterBy } = UseProduct()

	return (
		<div className="h-10 w-full flex items-center justify-around border-b-4 border-slate-300">
			{props.categories.map((categorie, index) => {
				return (
					<div
						className={`h-10 w-16 flex items-center justify-center cursor-pointer font-semibold ${filterBy === categorie && 'border-b-4 border-purple-500'}`}
						onClick={() => setFilterBy(categorie)}
						key={index}
					>
						<p>{categorie[0].toUpperCase() + categorie.substring(1)}</p>
					</div>
				)
			})}
		</div>
	)
}
