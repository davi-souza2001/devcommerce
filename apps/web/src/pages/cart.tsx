import { useEffect, useState } from "react"
import { BackgroundField } from "../components/BackgroundField"
import { CardToCartField } from "../components/CardToCartField"
import { NamePageField } from "../components/NamePageField"
import { TopBar } from "../components/TopBarField"
import UseCart from "../service/hook/useCart"

export default function Cart() {
	const { cart } = UseCart()
	const [sum, setSum] = useState(0)

	useEffect(() => {
		const sumValues = cart.reduce((accumulator, value) => accumulator + parseFloat(value.price), 0)

		setSum(sumValues)
	}, [cart])

	return (
		<BackgroundField>
			<TopBar />
			<NamePageField name="Cart" />
			<div className="w-full flex items-center justify-center flex-col">
				{cart?.map((cart: any, index) => {
					return (
						<CardToCartField id={cart.id} name={cart.name} image={cart.image} price={cart.price} key={index} />
					)
				})}
			</div>
			<div className="w-full flex items-center justify-center">
				<div className="w-[800px] flex items-center justify-center flex-col border-2 border-slate-300 rounded-lg p-5 mb-5">
					<div className="h-12 w-full flex items-center justify-between border-b-2 border-slate-300">
						<p>Subtotal</p>
						<p>R$ {sum}</p>
					</div>
					<div className="h-12 w-full flex items-center justify-between border-b-2 border-slate-300">
						<p>Shipping estimate</p>
						<p>R$ 0,00</p>
					</div>
					<div className="h-12 w-full flex items-center justify-between border-b-2 border-slate-300">
						<p>Discount</p>
						<p>R$ 00,00</p>
					</div>
					<div className="h-12 w-full flex items-center justify-between">
						<p className="font-semibold text-2xl">Total</p>
						<p className="font-medium text-xl">R$ {sum}</p>
					</div>
				</div>
			</div>
		</BackgroundField>
	)
}
