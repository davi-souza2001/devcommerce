import Image from 'next/image'

import { TopBar } from "../components/TopBar";
import Perfil from '../../public/Perfil.jpg';
import { InputField } from '../components/InputField';
import { ButtonField } from '../components/ButtonField';
import { BackgroundField } from '../components/BackgroundField';

export default function Account() {
	return (
		<BackgroundField>
			<TopBar />
			<div className='h-5/6 w-full flex items-start justify-around'>
				<div className='h-[320px] w-80 bg-slate-300 rounded-lg mt-10'>
					<div className='h-2/4 w-full flex items-center justify-center'>
						<Image src={Perfil} alt="Image Profile" height={150} width={150} className="rounded-full" />
					</div>
					<div className='h-1/4 w-full flex items-center justify-center text-2xl font-semibold'>
						<p>Davi Souza</p>
					</div>
					<div className='h-1/4 w-full flex items-center justify-center text-base font-medium border border-t-slate-400 rounded-lg'>
						<p>Membro desde: janeiro, 2021 </p>
					</div>
				</div>
				<div className='min-h-[320px] w-[800px] bg-slate-300 rounded-lg  mt-10'>
					<div className='h-16 w-full flex items-center justify-start text-xl font-semibold p-4'>
						<p>Seus dados:</p>
					</div>
					<div className='w-full flex flex-col items-center justify-start text-xl font-semibold p-4'>
						<InputField placeHolder='Nome' type='string' className='w-full mb-5' />
						<InputField placeHolder='E-mail' type='string' className='w-full mb-5' />
						<ButtonField text='Alterar' className='w-32' />
					</div>
				</div>
			</div>
		</BackgroundField>
	)
}
