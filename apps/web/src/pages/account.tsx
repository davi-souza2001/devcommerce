import Router from 'next/router'
import { useEffect, useState } from 'react'
import { AvatarProps, BigHead } from '@bigheads/core'
import { HiPencil } from "react-icons/hi"

import { TopBar } from "../components/TopBar"
import { InputField } from '../components/InputField'
import { ButtonField } from '../components/ButtonField'
import { BackgroundField } from '../components/BackgroundField'
import UseAuth from '../service/hook/useAuth'
import UseFetch from '../service/hook/useFetch'

export default function Account() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [avatar, setAvatar] = useState<AvatarProps>({ body: "chest", skinTone: "light" })
	const [avatarExists, setAvatarExists] = useState(false)

	const { logoutInFirebase, user } = UseAuth()

	function getAvatarExists() {
		UseFetch('http://localhost:3333/avatar/get', 'POST', { id: user.id })
			.then((avatarReceived: AvatarProps) => {
				if (avatarReceived !== null) {
					setAvatar({
						accessory: avatarReceived.accessory,
						body: avatarReceived.body,
						circleColor: avatarReceived.circleColor,
						clothing: avatarReceived.clothing,
						clothingColor: avatarReceived.clothingColor ?? "green",
						eyebrows: avatarReceived.eyebrows,
						eyes: avatarReceived.eyes,
						faceMask: avatarReceived.faceMask,
						facialHair: avatarReceived.facialHair,
						graphic: avatarReceived.graphic,
						hair: avatarReceived.hair,
						hairColor: avatarReceived.hairColor,
						hat: avatarReceived.hat,
						hatColor: avatarReceived.hatColor,
						lipColor: avatarReceived.lipColor,
						mouth: avatarReceived.mouth,
						skinTone: avatarReceived.skinTone
					})

					setAvatarExists(true)
				}
			})
	}

	function updateUser(e: any) {
		e.preventDefault()
		const user = { name, email }

		UseFetch('http://localhost:3333/user/update', 'POST', user)
	}

	useEffect(() => {
		if (user) {
			setEmail(user.email)
			setName(user.name)
		}

		if (user.id) {
			getAvatarExists()
		}
	}, [user])

	return (
		<BackgroundField>
			<TopBar />
			<div className='h-5/6 w-full flex items-start justify-around'>
				<div className='h-5/6 w-10/12 bg-slate-300 rounded-lg mt-10'>
					<div className='h-1/3 w-full flex items-center justify-between'>
						<div className='h-full w-96 flex items-center justify-center'>
							<div className='h-60 w-48'>
								{avatarExists ? (
									<BigHead
										accessory={avatar.accessory ?? 'none'}
										body={avatar.body ?? 'chest'}
										circleColor='blue'
										clothing={avatar.clothing ?? 'naked'}
										clothingColor={avatar.clothingColor ?? 'black'}
										eyebrows={avatar.eyebrows ?? 'serious'}
										eyes={avatar.eyes ?? 'normal'}
										faceMask={avatar.faceMask ?? false}
										faceMaskColor="white"
										facialHair={avatar.facialHair ?? 'none'}
										graphic={avatar.graphic ?? 'none'}
										hair={avatar.hair ?? 'none'}
										hairColor={avatar.hairColor ?? 'black'}
										hat={avatar.hat ?? 'none'}
										hatColor={avatar.hatColor ?? 'black'}
										lashes={false}
										lipColor={avatar.lipColor ?? 'turqoise'}
										mouth={avatar.mouth ?? 'serious'}
										skinTone={avatar.skinTone ?? 'light'}
									/>
								) : (
									<p>Criar</p>
								)}
							</div>
							<p className='ml-5 text-lg font-semibold'>Davi Souza</p>
							<p className='ml-5 text-xl font-semibold cursor-pointer'
								onClick={() => Router.push('/avatar')}
							>
								<HiPencil />
							</p>
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
							<form className='flex items-center justify-center flex-col mt-5'
								onSubmit={(e) => updateUser(e)}
							>
								<InputField type='string' placeHolder='name' onChange={(e) => setName(e.target.value)} value={name} className='mb-5 w-96' />
								<InputField type='string' placeHolder='email' readonly onChange={(e) => setEmail(e.target.value)} value={email} className='mb-5 w-96 bg-slate-200' />
								<ButtonField type='submit' text='Submit' color='green' className='w-full' />
							</form>
						</div>
					</div>
				</div>
			</div>
		</BackgroundField >
	)
}
