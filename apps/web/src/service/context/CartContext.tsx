import { createContext, useEffect, useState } from "react"
import UseAuth from "../hook/useAuth"
import UseFetch from "../hook/useFetch"

export interface Cart {
	id: string
	idUser: string
	name: string
	price: number
}

interface CartContextProps {
	cart: Cart[]
}

const CartContext = createContext<CartContextProps>({
	cart: [],
})

export function CartProvider(props: any) {
	const [cart, setCart] = useState<Cart[]>([])
	const { user } = UseAuth()

	useEffect(() => {
		UseFetch('http://localhost:3333/cart/get', "POST", {
			idUser: user.id
		}).then((cart) => setCart(cart))
	}, [user])


	return (
		<CartContext.Provider value={{
			cart,
		}}>
			{props.children}
		</CartContext.Provider>
	)

}

export default CartContext
