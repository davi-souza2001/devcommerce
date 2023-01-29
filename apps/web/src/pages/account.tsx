import Image from 'next/image'

import { TopBar } from "../components/TopBar";
import Perfil from '../../public/Perfil.jpg';
import { InputField } from '../components/InputField';
import { ButtonField } from '../components/ButtonField';
import { BackgroundField } from '../components/BackgroundField';
import { useState } from 'react';
import UseAuth from '../service/hook/useAuth';

export default function Account() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const { logoutInFirebase } = UseAuth()

	return (
		<BackgroundField>
			<TopBar />
			<div className='h-5/6 w-full flex items-start justify-around'>
				<div className='h-5/6 w-10/12 bg-slate-300 rounded-lg mt-10'>
					<div className='h-1/3 w-full flex items-center justify-between'>
						<div className='h-full w-96 flex items-center justify-center bg-red-500'>
							<Image alt='Image profile' src={Perfil} height={150} width={150} className='rounded-full' />
							<p className='ml-5 text-lg font-semibold'>Davi Souza</p>
						</div>
						<div className='h-full w-96 flex items-center justify-center bg-red-500'>
							<p className='text-lg font-medium cursor-pointer'>Edit your profile</p>
						</div>
					</div>
					<div className='h-2/3 w-full flex items-center justify-center'>
						<div className='h-full w-1/2 bg-blue-500'>
							<p>Orders</p>
						</div>
						<div className='h-full w-1/2 flex items-end justify-end'>
							<ButtonField text='Logout' color='red' onClick={logoutInFirebase} />
						</div>
					</div>
				</div>
			</div>
		</BackgroundField>
	)
}
