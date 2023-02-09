import { HiSearch } from "react-icons/hi"
import { BackgroundField } from "../components/BackgroundField"
import { CardField } from "../components/CardField"
import { TopBar } from "../components/TopBar"
import UseWishlist from "../service/hook/useWishlist"

export default function Wishlist() {
	const { wishlist } = UseWishlist()

	return (
		<BackgroundField>
			<TopBar />
			<div className="h-16 w-full  flex items-center justify-center">
				<div className="h-2/3 w-1/2 flex items-center justify-around bg-slate-100 rounded-md">
					<HiSearch className="h-1/2 w-16" />
					<input type="text" className="h-full w-full outline-none bg-slate-100 rounded-md" />
				</div>
			</div>
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
