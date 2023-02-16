import Link from "next/link"
import { useState } from "react"
import { BackgroundField } from "../components/BackgroundField"
import { ButtonField } from "../components/ButtonField"
import { InputField } from "../components/InputField"
import UseAuth from "../service/hook/useAuth"
import { Welcome } from "../components/WelcomeField"
import { SocialMediaOption } from "../components/SocialMediaOptionField"

import Google from '../../public/google.svg'
import Facebook from '../../public/facebook.svg'
import Apple from '../../public/apple.svg'

export default function Cadastro() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { createAccount, } = UseAuth()

	function handleCreate() {
		createAccount({
			name,
			email,
			password
		})
	}

	return (
		<BackgroundField className="flex flex-col md:flex-row items-center justify-center overflow-hidden">
			<div className="h-1/3 md:h-full w-full md:w-3/4 bg-gradient-to-r from-purple-500 to-purple-600 flex flex-col gap-3 items-center justify-center text-white text-xl md:text-7xl">
				<Welcome />
			</div>
			<div className="h-full w-full md:w-1/2">
				<div className="h-14 md:h-1/4 w-full flex items-end justify-center text-xl md:text-4xl font-semibold gap-2">
					<h1>CADASTRAR</h1>
					<p className="text-base md:text-xl font-normal">ou</p>
					<Link href='/login' className="text-green-500 hover:underline text-base md:text-xl">Entrar</Link>
				</div>
				<div className="mt-8 md:mt-0 md:h-1/3 w-full flex items-center">
					<form className="h-full w-full flex items-center justify-center flex-col">
						<InputField
							className="my-2 h-10 md:h-14 w-[80%] p-4 focus:border-2 focus:border-green-500 transition-colors"
							type="text"
							placeHolder="Nome"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<InputField
							className="my-2 h-10 md:h-14 w-[80%] p-4 focus:border-2 focus:border-green-500 transition-colors"
							type="text"
							placeHolder="E-mail"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<InputField
							className="my-2 h-10 md:h-14 w-[80%] p-4 focus:border-2 focus:border-green-500 transition-colors"
							type="password"
							placeHolder="Senha"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</form>
				</div>

				<div className="my-4 w-full flex items-center justify-start flex-col">
					<ButtonField text="Criar" className="w-1/2 md:w-96 bg-green-500 hover:bg-green-600" onClick={handleCreate} />
				</div>

				<div className="mt-6 flex items-center justify-center gap-6">
					<div className="w-[30%] h-1 bg-green-500 rounded-l-full" />
					<p>ou</p>
					<div className="w-[30%] h-1 bg-green-500 rounded-r-full" />
				</div>

				<div className="mt-6 w-full flex justify-center">
					<div className="w-3/4 md:w-2/3 flex justify-between">
						<SocialMediaOption image={Google} color='blue-500' />
						<SocialMediaOption image={Facebook} color='blue-500' />
						<SocialMediaOption image={Apple} color='black' />
					</div>
				</div>

				<div className="text-xs mb-2 md:text-sm w-full flex flex-col md:flex-row items-center justify-center mt-5 md:gap-2">
					<p>*Ao criar sua conta, você concorda com os</p>
					<p className="font-bold underline">Termos de Condições</p>
				</div>
			</div>
		</BackgroundField>
	)
}
