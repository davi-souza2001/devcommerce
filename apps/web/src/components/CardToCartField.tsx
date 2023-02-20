import Image from "next/image"
import { HiTrash } from "react-icons/hi"

import Test from '../../public/Teste.png'
import UseCart from "../service/hook/useCart"

interface CardToCartFieldProps {
	id: string
	name: string
	price: number
	image: string
}

export function CardToCartField(props: CardToCartFieldProps) {
	const { deleteToCart } = UseCart()

	return (
		<div className="lg:w-[900px] md:w-[750px] sm:w-[550px] h-36 w-full flex items-center justify-between bg-slate-300 mb-5 rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md">
			<div className="h-full w-[404px] flex items-center justify-between">
				<div className="h-full w-1/2 flex items-center justify-center">
					<Image alt="image product" src={props.image !== '' ? props.image : Test} height={148} className="rounded-tl-md rounded-bl-md" />
				</div>
				<div className="h-full w-1/2 flex items-start justify-start flex-col">
					<p className="mt-4 ml-5 font-semibold text-xl">{props.name}</p>
					<p className="mt-2 ml-5 font-medium text-lg-">tech</p>
				</div>
			</div>
			<div className="h-full w-36 flex items-center justify-center">
				<p className="mr-5 text-lg">R$ {props.price}</p>
				<p className="text-xl text-red-600 cursor-pointer" onClick={() => deleteToCart(props.id)}><HiTrash /></p>
			</div>
		</div>
	)
}
