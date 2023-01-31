import { useEffect, useState } from "react"
import { AvatarProps, BigHead } from "@bigheads/core"
import { AvatarOptions } from "../../utils/avatarOptions"
import UseAuth from "../../service/hook/useAuth"
import UseFetch from "../../service/hook/useFetch"
import { useRouter } from "next/router"
import { idAvatarFormatterOut } from "../../utils/idAvatarFormatter"

export default function Avatar() {
	const [avatar, setAvatar] = useState<AvatarProps>({})
	const [emailUserAvatar, setEmailUserAvatar] = useState('')
	const { user } = UseAuth()
	const router = useRouter()
	const avatarSearch = router.query.avatar

	function handleSubmitAvatar() {
		const reqBody = { ...avatar, idUser: user.id }
		UseFetch('http://localhost:3333/avatar/create', 'POST', reqBody)
	}

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
				}
			})
	}

	useEffect(() => {
		if (avatarSearch) {
			setEmailUserAvatar(idAvatarFormatterOut(avatarSearch as string))
		}

	}, [avatarSearch])

	useEffect(() => {
		if (user.id) {
			getAvatarExists()
		}

	}, [user])

	return (
		<div className="h-screen w-screen bg-slate-200 overflow-y-auto">
			<div className="h-20 w-full flex items-center justify-center text-4xl font-semibold">
				<h1>Edite seu avatar</h1>
			</div>
			<div className="h-72 w-full flex items-center justify-center bg-purple-500">
				<div className="h-72 w-72">
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
				</div>
			</div>
			<div className="w-full flex items-center justify-center flex-col">
				<div className="h-20 w-full flex items-center justify-center text-2xl font-semibold">
					<p>Opções</p>
				</div>
				<form className="w-full grid grid-cols-4 gap-4 p-5">
					<select className="h-16 w-72 rounded-lg outline-none text-gray-500 font-bold"
						onChange={(e: any) => setAvatar({ ...avatar, accessory: e.target.value })}
					>
						<option disabled>Accessory</option>
						{AvatarOptions.accessory().map(data => {
							return (
								<option value={data} key={data}>
									{data}
								</option>
							)
						})}
					</select>
					<select className="h-16 w-72 rounded-lg outline-none text-gray-500 font-bold"
						onChange={(e: any) => setAvatar({ ...avatar, body: e.target.value })}
					>
						<option disabled>Body</option>
						{AvatarOptions.body().map(data => {
							return (
								<option value={data} key={data}>{data}</option>
							)
						})}
					</select>
					<select className="h-16 w-72 rounded-lg outline-none text-gray-500 font-bold"
						onChange={(e: any) => setAvatar({ ...avatar, clothing: e.target.value })}
					>
						<option disabled>Clothing</option>
						{AvatarOptions.clothing().map(data => {
							return (
								<option value={data} key={data}>{data}</option>
							)
						})}
					</select>
					<select className="h-16 w-72 rounded-lg outline-none text-gray-500 font-bold"
						onChange={(e: any) => setAvatar({ ...avatar, clothingColor: e.target.value })}
					>
						<option disabled>Clothing Color</option>
						{AvatarOptions.clothingColor().map(data => {
							return (
								<option value={data} key={data}>{data}</option>
							)
						})}
					</select>
					<select className="h-16 w-72 rounded-lg outline-none text-gray-500 font-bold"
						onChange={(e: any) => setAvatar({ ...avatar, eyebrows: e.target.value })}
					>
						<option disabled>Eyebrows</option>
						{AvatarOptions.eyebrows().map(data => {
							return (
								<option value={data} key={data}>{data}</option>
							)
						})}
					</select>
					<select className="h-16 w-72 rounded-lg outline-none text-gray-500 font-bold"
						onChange={(e: any) => setAvatar({ ...avatar, eyes: e.target.value })}
					>
						<option disabled>Eyes</option>
						{AvatarOptions.eyes().map(data => {
							return (
								<option value={data} key={data}>{data}</option>
							)
						})}
					</select>
					<select className="h-16 w-72 rounded-lg outline-none text-gray-500 font-bold"
						onChange={(e: any) => {
							if (e.target.value === 'true') {
								setAvatar({ ...avatar, faceMask: true })
							} else {
								setAvatar({ ...avatar, faceMask: false })
							}
						}}
					>
						<option disabled>FaceMask</option>
						<option value={'false'} >False</option>
						<option value={'true'} >True</option>
					</select>
					<select className="h-16 w-72 rounded-lg outline-none text-gray-500 font-bold"
						onChange={(e: any) => setAvatar({ ...avatar, facialHair: e.target.value })}
					>
						<option disabled>Facial Hair</option>
						{AvatarOptions.facialHair().map((data, index) => {
							return (
								<option value={data} key={index}>{data}</option>
							)
						})}
					</select>
					<select className="h-16 w-72 rounded-lg outline-none text-gray-500 font-bold"
						onChange={(e: any) => setAvatar({ ...avatar, graphic: e.target.value })}
					>
						<option disabled>Tec</option>
						{AvatarOptions.graphic().map((data, index) => {
							return (
								<option value={data} key={index}>{data}</option>
							)
						})}
					</select>
					<select className="h-16 w-72 rounded-lg outline-none text-gray-500 font-bold"
						onChange={(e: any) => setAvatar({ ...avatar, hair: e.target.value })}
					>
						<option disabled>Hair</option>
						{AvatarOptions.hair().map((data, index) => {
							return (
								<option value={data} key={index}>{data}</option>
							)
						})}
					</select>
					<select className="h-16 w-72 rounded-lg outline-none text-gray-500 font-bold"
						onChange={(e: any) => setAvatar({ ...avatar, hairColor: e.target.value })}
					>
						<option disabled>Hair Color</option>
						{AvatarOptions.hairColor().map((data, index) => {
							return (
								<option value={data} key={index}>{data}</option>
							)
						})}
					</select>
					<select className="h-16 w-72 rounded-lg outline-none text-gray-500 font-bold"
						onChange={(e: any) => setAvatar({ ...avatar, hat: e.target.value })}
					>
						<option disabled>Hat</option>
						{AvatarOptions.hat().map((data, index) => {
							return (
								<option value={data} key={index}>{data}</option>
							)
						})}
					</select>
					<select className="h-16 w-72 rounded-lg outline-none text-gray-500 font-bold"
						onChange={(e: any) => setAvatar({ ...avatar, hatColor: e.target.value })}
					>
						<option disabled>Hat Color</option>
						{AvatarOptions.hatColor().map((data, index) => {
							return (
								<option value={data} key={index}>{data}</option>
							)
						})}
					</select>
					<select className="h-16 w-72 rounded-lg outline-none text-gray-500 font-bold"
						onChange={(e: any) => setAvatar({ ...avatar, lipColor: e.target.value })}
					>
						<option disabled>Lip Color</option>
						{AvatarOptions.lipColor().map((data, index) => {
							return (
								<option value={data} key={index}>{data}</option>
							)
						})}
					</select>
					<select className="h-16 w-72 rounded-lg outline-none text-gray-500 font-bold"
						onChange={(e: any) => setAvatar({ ...avatar, mouth: e.target.value })}
					>
						<option disabled>Mouth</option>
						{AvatarOptions.mouth().map((data, index) => {
							return (
								<option value={data} key={index}>{data}</option>
							)
						})}
					</select>
					<select className="h-16 w-72 rounded-lg outline-none text-gray-500 font-bold"
						onChange={(e: any) => setAvatar({ ...avatar, skinTone: e.target.value })}
					>
						<option disabled>Skin Tone</option>
						{AvatarOptions.skinTone().map((data, index) => {
							return (
								<option value={data} key={index}>{data}</option>
							)
						})}
					</select>
				</form>
				<button className="h-12 w-72 flex items-center justify-center bg-green-500 rounded-lg text-xl font-semibold text-slate-200 my-5"
					onClick={() => handleSubmitAvatar()}
				>
					Criar
				</button>
			</div>
		</div>
	)
}
