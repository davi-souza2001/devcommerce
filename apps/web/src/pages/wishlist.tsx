import { BackgroundField } from "../components/BackgroundField"
import { CardField } from "../components/CardField"
import { NamePageField } from "../components/NamePageField"
import { TopBar } from "../components/TopBar"
import UseWishlist from "../service/hook/useWishlist"

export default function Wishlist() {
	const { wishlist } = UseWishlist()

	return (
		<BackgroundField>
			<TopBar />
			<NamePageField name="Wishlist" />
			<div className="w-full p-5 grid grid-cols-4">
				{wishlist.length !== 0 ? wishlist?.map((wishlist, i) => {
					return (
						<CardField
							key={i}
							id={wishlist.id ?? ''}
							name={wishlist.name}
							price={wishlist.price}
							image={wishlist.image}
							category={wishlist.category}
							belongsWishlist={true}
						/>
					)
				}) : (
					<p>Looks like you haven't favorited a product yet :/</p>
				)}
			</div>
		</BackgroundField>
	)
}
