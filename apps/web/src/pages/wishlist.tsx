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
			<NamePageField name="Wishlist"/>
			<div className="w-full p-5 grid grid-cols-4">
				{wishlist?.map(wishlist => {
					return (
						<CardField
							key={wishlist.id}
							name={wishlist.name}
							price={wishlist.price}
							image={wishlist.image}
						/>
					)
				})}
			</div>
		</BackgroundField>
	)
}
