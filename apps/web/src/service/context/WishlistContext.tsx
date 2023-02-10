import { createContext, useEffect, useState } from "react"
import UseAuth from "../hook/useAuth"
import UseFetch from "../hook/useFetch"
import UseToast from "../hook/useToast"

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
	handleDeleteWishlist: (id: string) => void
}

const WishlistContext = createContext<WishlistContextProps>({
	wishlist: [],
	handleDeleteWishlist: () => { },
	handleAddToWishlist: async () => { }
})

export function WishlistProvider(props: any) {
	const [wishlist, setWishlist] = useState<Wishlist[]>([])
	const { user } = UseAuth()
	const { openToast } = UseToast()

	function getWishlist() {
		UseFetch('http://localhost:3333/wishlist/get', "POST", {
			idUser: user.id
		})
			.then((wishlists) => setWishlist(wishlists))
	}

	function handleAddToWishlist(data: Wishlist) {
		UseFetch('http://localhost:3333/wishlist/create', 'POST', {
			idUser: data.idUser,
			name: data.name,
			category: data.category,
			price: data.price,
			image: data.image
		}).then(() => {
			openToast({
				msg: 'Added to your list!',
				type: 'success'
			})
			getWishlist()
		})
	}

	function handleDeleteWishlist(id: string) {
		UseFetch('http://localhost:3333/wishlist/delete', "POST", {
			id
		}).then(() => {
			openToast({
				msg: 'Deleted from your list! :/',
				type: 'success'
			})
			getWishlist()
		})
	}

	useEffect(() => {
		getWishlist()
	}, [user])

	return (
		<WishlistContext.Provider value={{
			wishlist,
			handleAddToWishlist,
			handleDeleteWishlist
		}}>
			{props.children}
		</WishlistContext.Provider>
	)

}

export default WishlistContext
