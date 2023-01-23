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

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { loginAccount } = UseAuth()

	function handleLogin() {
		loginAccount(email, password)
	}

	return (
		<BackgroundField className="flex items-center justify-center overflow-hidden">
			<div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-purple-600 flex flex-col gap-3 items-center justify-center text-white text-7xl">
				<Welcome />
			</div>
			<div className="h-full w-1/2">
				
				<div className="h-1/4 w-full flex items-end justify-center text-4xl font-semibold gap-2">
					<h1><p className="font-normal text-3xl">Fazer</p> LOGIN</h1>
					<p className="text-xl font-normal">ou</p>
					<Link href='/cadastro' className="text-green-500 hover:underline text-xl">Cadastre-se</Link>
				</div>

				<div className="h-1/3 w-full flex items-center">
					<form className="h-full w-full flex items-center justify-center flex-col">
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

						<div className="flex flex-row w-full justify-between items-center ">
							<div className="h-10 w-[50%] flex items-center justify-center ml-5">
								<input type="checkbox" className="text-3xl outline-none"/>
								<p className="mx-3 text-gray-500">Lembrar-me</p>
							</div>

							<div className="h-10 w-[50%] flex items-center justify-center ml-5">
								<p className="text-gray-500 underline">Esqueci minha senha</p>
							</div>
						</div>

					</form>
				</div>

				<div className="w-full flex items-center justify-start flex-col">
					<ButtonField text="Entrar" className="w-96" onClick={handleLogin} />
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
			</div>
		</BackgroundField>
	)
}
