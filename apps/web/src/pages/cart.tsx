import { BackgroundField } from "../components/BackgroundField"
import { CardToCartField } from "../components/CardToCartField"
import { NamePageField } from "../components/NamePageField"
import { TopBar } from "../components/TopBarField"
import UseCart from "../service/hook/useCart"

export default function Cart() {
	const { cart } = UseCart()

	return (
		<BackgroundField>
			<TopBar />
			<NamePageField name="Cart" />
			<div className="w-full flex items-center justify-center flex-col">
				<CardToCartField/>
				<CardToCartField/>
				<CardToCartField/>
			</div>
		</BackgroundField>
	)
}
