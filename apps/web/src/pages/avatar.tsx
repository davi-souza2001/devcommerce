import { useEffect, useState } from "react"
import { AvatarProps, BigHead } from "@bigheads/core"
import { AvatarOptions } from "../utils/avatarOptions"
import UseAuth from "../service/hook/useAuth"
import UseFetch from "../service/hook/useFetch"

export default function Avatar() {
	const [avatar, setAvatar] = useState<AvatarProps>({ body: "chest", skinTone: "light" })
	const [avatarExists, setAvatarExists] = useState(false)
	const { user } = UseAuth()

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

					setAvatarExists(true)
				}
			})
	}

	useEffect(() => {
		if (user.id) {
			getAvatarExists()
		}

	}, [user])

	return (
		<div className="h-screen w-full bg-slate-200 overflow-y-auto">
			<div className="h-[50%] w-full flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-purple-600 shadow-xl">
				<h1 className="text-4xl font-semibold text-white">Edit your avatar</h1>
				<div className="h-80 w-80">
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
				{!avatarExists && (
					<>
						<div className="h-20 w-full flex items-center justify-center text-2xl font-semibold">
							<p>Options</p>
						</div>
						<form className="w-full grid grid-cols-4 gap-4 p-5">

						<div className="flex flex-col">
								<span className="mb-4">Acessory:</span>

								<select className="h-16 w-72 rounded-lg cursor-pointer border-b-4 border-transparent hover:border-purple-500 transition-all hover:shadow-lg p-4 outline-none text-gray-500 font-bold"
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
							</div>
							
							<div className="flex flex-col">
								<span className="mb-4">Body:</span>

								<select className="h-16 w-72 rounded-lg cursor-pointer border-b-4 border-transparent hover:border-purple-500 transition-all hover:shadow-lg p-4 outline-none text-gray-500 font-bold"
									onChange={(e: any) => setAvatar({ ...avatar, body: e.target.value })}
								>
									<option disabled>Body</option>
									{AvatarOptions.body().map(data => {
										return (
											<option value={data} key={data}>{data}</option>
										)
									})}
								</select>
							</div>

							<div className="flex flex-col">
								<span className="mb-4">Clothing:</span>

								<select className="h-16 w-72 rounded-lg cursor-pointer border-b-4 border-transparent hover:border-purple-500 transition-all hover:shadow-lg p-4 outline-none text-gray-500 font-bold"
									onChange={(e: any) => setAvatar({ ...avatar, clothing: e.target.value })}
								>
									<option disabled>Clothing</option>
									{AvatarOptions.clothing().map(data => {
										return (
											<option value={data} key={data}>{data}</option>
										)
									})}
								</select>
							</div>

							<div className="flex flex-col">
								<span className="mb-4">Clothing Color:</span>

								<select className="h-16 w-72 rounded-lg cursor-pointer border-b-4 border-transparent hover:border-purple-500 transition-all hover:shadow-lg p-4 outline-none text-gray-500 font-bold"
									onChange={(e: any) => setAvatar({ ...avatar, clothingColor: e.target.value })}
								>
									<option disabled>Clothing Color</option>
									{AvatarOptions.clothingColor().map(data => {
										return (
											<option value={data} key={data}>{data}</option>
										)
									})}
								</select>
							</div>

							<div className="flex flex-col">
								<span className="mb-4">Eyebrows:</span>

								<select className="h-16 w-72 rounded-lg cursor-pointer border-b-4 border-transparent hover:border-purple-500 transition-all hover:shadow-lg p-4 outline-none text-gray-500 font-bold"
									onChange={(e: any) => setAvatar({ ...avatar, eyebrows: e.target.value })}
								>
									<option disabled>Eyebrows</option>
									{AvatarOptions.eyebrows().map(data => {
										return (
											<option value={data} key={data}>{data}</option>
										)
									})}
								</select>
							</div>

							<div className="flex flex-col">
								<span className="mb-4">Eyes:</span>

								<select className="h-16 w-72 rounded-lg cursor-pointer border-b-4 border-transparent hover:border-purple-500 transition-all hover:shadow-lg p-4 outline-none text-gray-500 font-bold"
									onChange={(e: any) => setAvatar({ ...avatar, eyes: e.target.value })}
								>
									<option disabled>Eyes</option>
									{AvatarOptions.eyes().map(data => {
										return (
											<option value={data} key={data}>{data}</option>
										)
									})}
								</select>
							</div>

							<div className="flex flex-col">
								<span className="mb-4">Mask:</span>

								<select className="h-16 w-72 rounded-lg cursor-pointer border-b-4 border-transparent hover:border-purple-500 transition-all hover:shadow-lg p-4 outline-none text-gray-500 font-bold"
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
							</div>

							<div className="flex flex-col">
								<span className="mb-4">Facial Hair:</span>

								<select className="h-16 w-72 rounded-lg cursor-pointer border-b-4 border-transparent hover:border-purple-500 transition-all hover:shadow-lg p-4 outline-none text-gray-500 font-bold"
									onChange={(e: any) => setAvatar({ ...avatar, facialHair: e.target.value })}
								>
									<option disabled>Facial Hair</option>
									{AvatarOptions.facialHair().map((data, index) => {
										return (
											<option value={data} key={index}>{data}</option>
										)
									})}
								</select>
							</div>

							<div className="flex flex-col">
								<span className="mb-4">Tech:</span>

								<select className="h-16 w-72 rounded-lg cursor-pointer border-b-4 border-transparent hover:border-purple-500 transition-all hover:shadow-lg p-4 outline-none text-gray-500 font-bold"
									onChange={(e: any) => setAvatar({ ...avatar, graphic: e.target.value })}
								>
									<option disabled>Tec</option>
									{AvatarOptions.graphic().map((data, index) => {
										return (
											<option value={data} key={index}>{data}</option>
										)
									})}
								</select>
							</div>

							<div className="flex flex-col">
								<span className="mb-4">Hair:</span>

								<select className="h-16 w-72 rounded-lg cursor-pointer border-b-4 border-transparent hover:border-purple-500 transition-all hover:shadow-lg p-4 outline-none text-gray-500 font-bold"
									onChange={(e: any) => setAvatar({ ...avatar, hair: e.target.value })}
								>
									<option disabled>Hair</option>
									{AvatarOptions.hair().map((data, index) => {
										return (
											<option value={data} key={index}>{data}</option>
										)
									})}
								</select>
							</div>

							<div className="flex flex-col">
								<span className="mb-4">Hair Color:</span>

								<select className="h-16 w-72 rounded-lg cursor-pointer border-b-4 border-transparent hover:border-purple-500 transition-all hover:shadow-lg p-4 outline-none text-gray-500 font-bold"
									onChange={(e: any) => setAvatar({ ...avatar, hairColor: e.target.value })}
								>
									<option disabled>Hair Color</option>
									{AvatarOptions.hairColor().map((data, index) => {
										return (
											<option value={data} key={index}>{data}</option>
										)
									})}
								</select>
							</div>

							<div className="flex flex-col">
								<span className="mb-4">Hat:</span>

								<select className="h-16 w-72 rounded-lg cursor-pointer border-b-4 border-transparent hover:border-purple-500 transition-all hover:shadow-lg p-4 outline-none text-gray-500 font-bold"
									onChange={(e: any) => setAvatar({ ...avatar, hat: e.target.value })}
								>
									<option disabled>Hat</option>
									{AvatarOptions.hat().map((data, index) => {
										return (
											<option value={data} key={index}>{data}</option>
										)
									})}
								</select>
							</div>

							<div className="flex flex-col">
								<span className="mb-4">Hat Color:</span>

								<select className="h-16 w-72 rounded-lg cursor-pointer border-b-4 border-transparent hover:border-purple-500 transition-all hover:shadow-lg p-4 outline-none text-gray-500 font-bold"
									onChange={(e: any) => setAvatar({ ...avatar, hatColor: e.target.value })}
								>
									<option disabled>Hat Color</option>
									{AvatarOptions.hatColor().map((data, index) => {
										return (
											<option value={data} key={index}>{data}</option>
										)
									})}
								</select>
							</div>

							<div className="flex flex-col">
								<span className="mb-4">Lip Color:</span>

								<select className="h-16 w-72 rounded-lg cursor-pointer border-b-4 border-transparent hover:border-purple-500 transition-all hover:shadow-lg p-4 outline-none text-gray-500 font-bold"
									onChange={(e: any) => setAvatar({ ...avatar, lipColor: e.target.value })}
								>
									<option disabled>Lip Color</option>
									{AvatarOptions.lipColor().map((data, index) => {
										return (
											<option value={data} key={index}>{data}</option>
										)
									})}
								</select>
							</div>

							<div className="flex flex-col">
								<span className="mb-4">Mouth:</span>

								<select className="h-16 w-72 rounded-lg cursor-pointer border-b-4 border-transparent hover:border-purple-500 transition-all hover:shadow-lg p-4 outline-none text-gray-500 font-bold"
									onChange={(e: any) => setAvatar({ ...avatar, mouth: e.target.value })}
								>
									<option disabled>Mouth</option>
									{AvatarOptions.mouth().map((data, index) => {
										return (
											<option value={data} key={index}>{data}</option>
										)
									})}
								</select>
							</div>

							<div className="flex flex-col">
								<span className="mb-4">Skin Tone:</span>

								<select className="h-16 w-72 rounded-lg cursor-pointer border-b-4 border-transparent hover:border-purple-500 transition-all hover:shadow-lg p-4 outline-none text-gray-500 font-bold"
									onChange={(e: any) => setAvatar({ ...avatar, skinTone: e.target.value })}
								>
									<option disabled>Skin Tone</option>
									{AvatarOptions.skinTone().map((data, index) => {
										return (
											<option value={data} key={index}>{data}</option>
										)
									})}
								</select>
							</div>
						</form>
						<button className="h-12 w-[10%] my-6 flex items-center justify-center rounded-lg text-xl font-semibold text-white transition-all bg-green-500 hover:bg-green-600"
							onClick={() => handleSubmitAvatar()}
						>
							Submit
						</button>
					</>
				)}
			</div>
		</div>
	)
}
