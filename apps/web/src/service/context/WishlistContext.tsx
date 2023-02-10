import { createContext, useEffect, useState } from "react"
import UseAuth from "../hook/useAuth"
import UseFetch from "../hook/useFetch"
import UseToast from "../hook/useToast"

export interface Wishlist {
	id?: string
	name: string
	idUser: string
	category: string
	price: number
	image: string
}

interface WishlistContextProps {
	wishlist: Wishlist[]
	itemAlreadyExists: (data: Wishlist) => boolean
	handleAddToWishlist: (data: Wishlist) => void
	handleDeleteWishlist: (id: string) => void
}

const WishlistContext = createContext<WishlistContextProps>({
	wishlist: [],
	itemAlreadyExists: () => false,
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
		}).then((wishlists) => setWishlist(wishlists))
	}

	function handleAddToWishlist(data: Wishlist) {
		if (itemAlreadyExists(data)) {
			openToast({
				msg: 'Item already have in your wishlist!',
				type: 'info'
			})
		} else {
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

	function itemAlreadyExists(data: Wishlist) {
		const list: Wishlist[] = []
		let alredyExists = false
		wishlist.map(wishlist => wishlist.idUser === user.id && list.push(wishlist))
		list.map((item) => {
			if (item.name === data.name) {
				alredyExists = true
			}
		})

		return alredyExists
	}

	useEffect(() => {
		getWishlist()
	}, [user])

	return (
		<WishlistContext.Provider value={{
			wishlist,
			itemAlreadyExists,
			handleAddToWishlist,
			handleDeleteWishlist
		}}>
			{props.children}
		</WishlistContext.Provider>
	)

}

export default WishlistContext
