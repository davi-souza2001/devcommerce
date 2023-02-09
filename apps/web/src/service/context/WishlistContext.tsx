import { createContext, useEffect, useState } from "react"
import UseAuth from "../hook/useAuth"
import UseFetch from "../hook/useFetch"

interface Wishlist {
	id?: string
	name: string
	idUser: string
	category: string
	price: number
	image: string
}

interface WishlistContextProps {
	wishlist: Wishlist[]
	handleAddToWishlist: (data: Wishlist) => void
}

const WishlistContext = createContext<WishlistContextProps>({
	wishlist: [],
	handleAddToWishlist: async () => { }
})

export function WishlistProvider(props: any) {
	const [wishlist, setWishlist] = useState<Wishlist[]>([])
	const { user } = UseAuth()

	function handleAddToWishlist(data: Wishlist) {
		UseFetch('http://localhost:3333/wishlist/create', 'POST', {
			idUser: data.idUser,
			name: data.name,
			category: data.category,
			price: data.price,
			image: data.image
		}).then(() => getWishlist())
	}

	function getWishlist(){
		UseFetch('http://localhost:3333/wishlist/get', "POST", {
			idUser: user.id
		})
			.then((wishlists) => setWishlist(wishlists))
	}

	useEffect(() => {
		getWishlist()
	}, [user])

	return (
		<WishlistContext.Provider value={{
			wishlist,
			handleAddToWishlist
		}}>
			{props.children}
		</WishlistContext.Provider>
	)

}

export default WishlistContext
