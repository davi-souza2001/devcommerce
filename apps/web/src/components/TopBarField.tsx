import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { HiArrowCircleDown } from 'react-icons/hi'
import Router from 'next/router'

export function TopBar() {

	return (
		<div className="h-20 w-full flex items-center justify-between bg-black text-slate-200 uppercase transition-all">
			<div className='h-full w-52 bg-purple-500 flex items-center justify-center font-poppins font-bold text-xl' onClick={() => Router.push('/')}>
				<h1>DevCommerce</h1>
			</div>
			<div className='hidden h-full w-[800px] md:flex items-center justify-around '>
				<span className="cursor-pointer opacity-80 transition-all hover:opacity-100" onClick={() => Router.push('/categories')}>Categories</span>
				<span className="cursor-pointer opacity-80 transition-all hover:opacity-100" onClick={() => Router.push('/search')}>Search</span>
				<span className="cursor-pointer opacity-80 transition-all hover:opacity-100" onClick={() => Router.push('/cart')}>Cart</span>
				<span className="cursor-pointer opacity-80 transition-all hover:opacity-100" onClick={() => Router.push('/wishlist')}>Wishlist</span>
				<span className="cursor-pointer opacity-80 transition-all hover:opacity-100" onClick={() => Router.push('/account')}>Account</span>
			</div>
			<div className='h-full w-48 flex items-center justify-center md:hidden'>
				<Menu>
					<MenuButton>
						<div className='h-1/2 w-28 flex items-center justify-center bg-slate-800 p-2 rounded-md'>
							<p>Options</p>
							<p><HiArrowCircleDown /></p>
						</div>
					</MenuButton>
					<MenuList className='bg-black outline-none border-none'>
						<MenuItem onClick={() => Router.push('/categories')}>Categories</MenuItem>
						<MenuItem onClick={() => Router.push('/search')}>Search</MenuItem>
						<MenuItem onClick={() => Router.push('/cart')}>Cart</MenuItem>
						<MenuItem onClick={() => Router.push('/wishlist')}>Wishlist</MenuItem>
						<MenuItem onClick={() => Router.push('/account')}>Account</MenuItem>
					</MenuList>
				</Menu>
			</div>
		</div>
	)
}
