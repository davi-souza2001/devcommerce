import { createContext, useEffect, useState } from "react"
import UseAuth from "../hook/useAuth"
import UseFetch from "../hook/useFetch"
import UseToast from "../hook/useToast"

export interface Cart {
	id?: string
	idUser: string
	name: string
	price: string
	image: string
}

interface CartContextProps {
	cart: Cart[]
	addToCart: (product: Cart) => void
	deleteToCart: (id: string) => void
}

const CartContext = createContext<CartContextProps>({
	cart: [],
	addToCart: () => { },
	deleteToCart: () => { }
})

export function CartProvider(props: any) {
	const [cart, setCart] = useState<Cart[]>([])
	const { user } = UseAuth()
	const { openToast } = UseToast()

	function addToCart(product: Cart) {
		UseFetch('http://localhost:3333/cart/create', 'POST', {
			idUser: product.idUser,
			name: product.name,
			price: product.price,
			image: product.image
		}).then(() => {
			openToast({
				msg: 'Product added!',
				type: 'success'
			})
			getCart()
		})
	}

	function deleteToCart(id: string){
		UseFetch('http://localhost:3333/cart/delete', 'POST', {
			id
		}).then(() => {
			openToast({
				msg: 'Product deleted!',
				type: 'success'
			})
			getCart()
		})
	}

	function getCart() {
		UseFetch('http://localhost:3333/cart/get', "POST", {
			idUser: user.id
		}).then((cart) => setCart(cart))
	}

	useEffect(() => {
		getCart()
	}, [user])


	return (
		<CartContext.Provider value={{
			cart,
			addToCart,
			deleteToCart
		}}>
			{props.children}
		</CartContext.Provider>
	)

}

export default CartContext
