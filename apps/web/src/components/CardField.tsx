import Image from 'next/image'
import { HiHeart, HiShoppingCart, HiTrash } from 'react-icons/hi'

import Photo from '../../public/Teste.png'
import { Wishlist } from '../service/context/WishlistContext'
import UseAuth from '../service/hook/useAuth'
import UseCart from '../service/hook/useCart'
import UseWishlist from '../service/hook/useWishlist'

interface CardFieldProps {
	id: string
	name: string
	price: string
	category: string
	belongsWishlist: boolean
	image?: string
}

export function CardField(props: CardFieldProps) {
	const { handleAddToWishlist, handleDeleteWishlist, itemAlreadyExists } = UseWishlist()
	const { user } = UseAuth()
	const { addToCart } = UseCart()

	const product: Wishlist = {
		id: props.id,
		idUser: user.id ?? '',
		name: props.name,
		category: props.category,
		price: props.price,
		image: props.image ?? ''
	}

	return (
		<div className="h-80 w-72 bg-slate-100 rounded-md my-3">
			<div className='h-2/3 w-full flex items-center justify-center'>
				{props.image ? (
					<Image src={props.image} alt="Product image" height={270} className='h-full rounded-t-md' />
				) : (
					<Image src={Photo} alt="Product image" height={270} className='h-full rounded-t-md' />
				)}
			</div>
			<div className='h-1/3 w-full flex items-start justify-around flex-col'>
				<div className='h-2/3 w-full flex items-center justify-between'>
					<p className='ml-2 text-xl font-semibold'>{props.name}</p>
					<div className='flex'>
						{props.belongsWishlist ? (
							<HiTrash
								className='mr-4 text-2xl cursor-pointer hover:text-red-700'
								onClick={() => handleDeleteWishlist(product.id ?? '')}
							/>
						) : (
							<HiHeart
								className={`mr-4 text-2xl cursor-pointer ${itemAlreadyExists(product) && 'text-red-700'} hover:text-red-700`}
								onClick={() => handleAddToWishlist(product)}
							/>
						)}
						<HiShoppingCart
							className='mr-4 text-2xl cursor-pointer hover:text-slate-700'
							onClick={() => addToCart({
								idUser: user.id ?? '',
								image: props.image ?? '',
								name: props.name,
								price: props.price
							})}
						/>
					</div>
				</div>
				<div className='h-1/3 w-full flex items-center justify-start'>
					<p className='text-base font-light ml-2'>R$ {props.price}</p>
				</div>
			</div>
		</div>
	)
}
