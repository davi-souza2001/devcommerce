import Image from 'next/image'

import { TopBar } from "../components/TopBar";
import Perfil from '../../public/Perfil.jpg';
import { InputField } from '../components/InputField';
import { ButtonField } from '../components/ButtonField';
import { BackgroundField } from '../components/BackgroundField';
import { useEffect, useState } from 'react';
import UseAuth from '../service/hook/useAuth';

export default function Account() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const { logoutInFirebase, user } = UseAuth()

	useEffect(() => {
		if (user) {
			setEmail(user.email)
			setName(user.name)
		}
	}, [user])

	return (
		<BackgroundField>
			<TopBar />
			<div className='h-5/6 w-full flex items-start justify-around'>
				<div className='h-5/6 w-10/12 bg-slate-300 rounded-lg mt-10'>
					<div className='h-1/3 w-full flex items-center justify-between'>
						<div className='h-full w-96 flex items-center justify-center'>
							<Image alt='Image profile' src={Perfil} height={150} width={150} className='rounded-full' />
							<p className='ml-5 text-lg font-semibold'>Davi Souza</p>
						</div>
						<div className='h-full w-96 flex items-center justify-center'>
							<ButtonField text='Logout' color='red' onClick={logoutInFirebase} className='p-5' />
						</div>
					</div>
					<div className='h-2/3 w-full flex items-center justify-center'>
						<div className='h-full w-1/2 bg-blue-500'>
							<p>Orders</p>
						</div>
						<div className='h-full w-1/2 flex items-center justify-center flex-col'>
							<p className='text-xl font-medium'>Edit your profile</p>
							<form className='flex items-center justify-center flex-col mt-5'>
								<InputField type='string' placeHolder='name' onChange={(e) => setName(e.target.value)} value={name} className='mb-5 w-96' />
								<InputField type='string' placeHolder='email' onChange={(e) => setEmail(e.target.value)} value={email} className='mb-5 w-96' />
								<ButtonField type='submit' text='Submit' color='green' className='w-full' />
							</form>
						</div>
					</div>
				</div>
			</div>
		</BackgroundField>
	)
}
