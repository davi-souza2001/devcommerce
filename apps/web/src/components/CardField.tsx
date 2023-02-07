import Image from 'next/image'
import { HiHeart, HiShoppingCart } from 'react-icons/hi'

import Photo from '../../public/Teste.png'

export function CardField() {
	return (
		<div className="h-80 w-72 bg-slate-100 rounded-md my-3">
			<div className='h-2/3 w-full flex items-center justify-center'>
				<Image src={Photo} alt="Product image" height={270} className='h-full rounded-t-md' />
			</div>
			<div className='h-1/3 w-full flex items-start justify-around flex-col'>
				<div className='h-2/3 w-full flex items-center justify-between'>
					<p className='ml-2 text-xl font-semibold'>Card</p>
					<div className='flex'>
						<HiHeart className='mr-4 text-2xl cursor-pointer hover:text-red-700' />
						<HiShoppingCart className='mr-4 text-2xl cursor-pointer hover:text-slate-700' />
					</div>
				</div>
				<div className='h-1/3 w-full flex items-center justify-start'>
					<p className='text-base font-light ml-2'>Card</p>
				</div>
			</div>
		</div>
	)
}
