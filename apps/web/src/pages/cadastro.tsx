import Link from "next/link";
import { useState } from "react";
import { BackgroundField } from "../components/BackgroundField";
import { ButtonField } from "../components/ButtonField";
import { InputField } from "../components/InputField";
import UseAuth from "../service/hook/useAuth";
import { Welcome } from "../components/Welcome";
import { SocialMediaOption } from "../components/SocialMediaOption";

import Google from '../../public/google.svg';
import Facebook from '../../public/facebook.svg';
import Apple from '../../public/apple.svg';

export default function Cadastro() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { createAccount } = UseAuth()

	function handleCreate() {
		createAccount({
			name,
			email,
			password
		})
	}

	return (
		<BackgroundField className="flex items-center justify-center">
			<div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-purple-600 flex flex-col gap-3 items-center justify-center text-white text-7xl">
				<Welcome />
			</div>
			<div className="h-full w-1/2">

				<div className="h-1/4 w-full flex items-end justify-center text-4xl font-semibold gap-2">
					<h1><p className="font-normal text-3xl">Fazer</p> CADASTRO</h1>
					<p className="text-xl font-normal">ou</p>
					<Link href='/login' className="text-green-500 hover:underline text-xl">fazer Login</Link>
				</div>

				<div className="h-1/3 w-full flex items-center">
					<form className="h-full w-full flex items-center justify-center flex-col">
						<InputField
							className="my-5 w-[80%] p-4 focus:border-2 focus:border-green-500 transition-colors"
							type="text"
							placeHolder="Nome"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<InputField
							className="my-5 w-[80%] p-4 focus:border-2 focus:border-green-500 transition-colors"
							type="text"
							placeHolder="E-mail"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<InputField
							className="my-5 w-[80%] p-4 focus:border-2 focus:border-green-500 transition-colors"
							type="password"
							placeHolder="Senha"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</form>
				</div>

				<div className="w-full flex items-center justify-start flex-col ">
					<ButtonField text="Criar" className="w-96" onClick={handleCreate} />
				</div>


				<div className="h-1/6 flex items-center justify-center gap-6">
					<div className="w-[30%] h-1 bg-green-500 rounded-l-full" />
					<p>ou</p>
					<div className="w-[30%] h-1 bg-green-500 rounded-r-full" />
				</div>

				<div className="w-full flex justify-center">
					<div className="w-2/3 flex justify-between">
						<SocialMediaOption image={Google} />
						<SocialMediaOption image={Facebook} />
						<SocialMediaOption image={Apple} />
					</div>
				</div>

				<div className="w-full flex items-center justify-center mt-5 gap-2">
					<p>*Ao criar sua conta, você concorda com os</p>
					<p className="font-bold underline">Termos de Condições</p>
				</div>
			</div>
		</BackgroundField>
	)
}
