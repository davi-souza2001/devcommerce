import Image from 'next/image';
import Router from 'next/router';

import Logo from '../../public/logo.svg';

export function TopBar() {
	return (
		<div className="h-20 w-full flex items-center justify-around bg-black text-slate-200 text-xl font-regular uppercase transition-all">
			<span className="cursor-pointer opacity-80 transition-all hover:opacity-100" onClick={() => Router.push('/')}>Home</span>
			<span className="cursor-pointer opacity-80 transition-all hover:opacity-100">Categories</span>
			<span className="cursor-pointer opacity-80 transition-all hover:opacity-100">Search</span>
			<Image src={Logo} alt='Logo' height={100} width={100} />
			<span className="cursor-pointer opacity-80 transition-all hover:opacity-100">Cart</span>
			<span className="cursor-pointer opacity-80 transition-all hover:opacity-100">Withlist</span>
			<span className="cursor-pointer opacity-80 transition-all hover:opacity-100" onClick={() => Router.push('/account')}>Account</span>
		</div>
	)
}
