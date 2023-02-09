import { createContext, useEffect, useState } from "react"
import UseAuth from "../hook/useAuth"
import UseFetch from "../hook/useFetch"

interface Wishlist {
	id: string
	name: string
	idUser: string
	category: string
	price: number
	image: string
}

interface WishlistContextProps {
	wishlist: Wishlist[]
}

const WishlistContext = createContext<WishlistContextProps>({
	wishlist: []
})

export function WishlistProvider(props: any) {
	const [wishlist, setWishlist] = useState<Wishlist[]>([])
	const { user } = UseAuth()

	useEffect(() => {
		UseFetch('http://localhost:3333/wishlist/get', "POST", {
			idUser: user.id
		})
			.then((wishlists) => setWishlist(wishlists))
	}, [user])

	return (
		<WishlistContext.Provider value={{
			wishlist
		}}>
			{props.children}
		</WishlistContext.Provider>
	)

}

export default WishlistContext
