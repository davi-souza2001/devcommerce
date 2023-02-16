import { useEffect, useState } from "react"
import { BackgroundField } from "../components/BackgroundField"
import { CardToCartField } from "../components/CardToCartField"
import { NamePageField } from "../components/NamePageField"
import { TopBar } from "../components/TopBarField"
import UseCart from "../service/hook/useCart"

export default function Cart() {
	const { cart } = UseCart()
	const [sumOfPrices, setSumOfPrices] = useState(0)

	useEffect(() => {
		if (cart.length !== 0) {
			const prices = cart.map(cart => cart.price)
			prices.map(value => {
				setSumOfPrices(state => value += state)
			})
		}

	}, [cart])

	return (
		<BackgroundField>
			<TopBar />
			<NamePageField name="Cart" />
			<div className="w-full flex items-center justify-center flex-col">
				{cart?.map((cart: any) => {
					return (
						<CardToCartField name={cart.name} image={cart.image} price={cart.price} />
					)
				})}
			</div>
			<div className="w-full flex items-center justify-center">
				<div className="w-[800px] flex items-center justify-center flex-col border-2 border-slate-300 rounded-lg p-5 mb-5">
					<div className="h-12 w-full flex items-center justify-between border-b-2 border-slate-300">
						<p>Subtotal</p>
						<p>R$ 14,99</p>
					</div>
					<div className="h-12 w-full flex items-center justify-between border-b-2 border-slate-300">
						<p>Shipping estimate</p>
						<p>R$ 4,99</p>
					</div>
					<div className="h-12 w-full flex items-center justify-between border-b-2 border-slate-300">
						<p>Discount</p>
						<p>R$ 00,00</p>
					</div>
					<div className="h-12 w-full flex items-center justify-between">
						<p className="font-semibold text-2xl">Total</p>
						<p className="font-medium text-xl">R$ {sumOfPrices}</p>
					</div>
				</div>
			</div>
		</BackgroundField>
	)
}
