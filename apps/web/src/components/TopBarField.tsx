import Image from 'next/image'
import Router from 'next/router'

import Logo from '../../public/logo.svg'

export function TopBar() {
	return (
		<div className="h-20 w-full flex items-center justify-between bg-black text-slate-200 uppercase transition-all">
			<div className='h-full w-52 bg-purple-500 flex items-center justify-center font-poppins font-bold text-xl'>
				<h1>DevCommerce</h1>
			</div>
			<div className='h-full w-[800px] flex items-center justify-around'>
				<span className="cursor-pointer opacity-80 transition-all hover:opacity-100" onClick={() => Router.push('/')}>Home</span>
				<span className="cursor-pointer opacity-80 transition-all hover:opacity-100" onClick={() => Router.push('/categories')}>Categories</span>
				<span className="cursor-pointer opacity-80 transition-all hover:opacity-100" onClick={() => Router.push('/search')}>Search</span>
				<span className="cursor-pointer opacity-80 transition-all hover:opacity-100" onClick={() => Router.push('/cart')}>Cart</span>
				<span className="cursor-pointer opacity-80 transition-all hover:opacity-100" onClick={() => Router.push('/wishlist')}>Wishlist</span>
				<span className="cursor-pointer opacity-80 transition-all hover:opacity-100" onClick={() => Router.push('/account')}>Account</span>
			</div>
		</div>
	)
}
