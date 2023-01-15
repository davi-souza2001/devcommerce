import Link from "next/link";
import { useState } from "react";
import { BackgroundField } from "../components/BackgroundField";
import { ButtonField } from "../components/ButtonField";
import { InputField } from "../components/InputField";
import UseAuth from "../service/hook/useAuth";

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { loginAccount } = UseAuth()

	function handleLogin() {
		loginAccount(email, password)
	}

	return (
		<BackgroundField className="flex items-center justify-center">
			<div className="h-full w-3/4 bg-purple-500 flex items-center justify-center">
				App Name
			</div>
			<div className="h-full w-1/2">
				<div className="h-1/4 w-full flex items-end justify-center text-4xl font-semibold">
					<h1>Fazer Login</h1>
				</div>
				<div className="h-2/4 w-full flex items-center">
					<form className="h-full w-full flex items-center justify-center flex-col">
						<InputField
							className="my-5 w-[80%]"
							type="text"
							placeHolder="E-mail"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<InputField
							className="my-5 w-[80%]"
							type="password"
							placeHolder="Senha"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div className="h-10 w-[80%] flex items-center ml-5">
							<input type="checkbox" className="text-3xl outline-none" />
							<p className="mx-3 text-gray-500">Lembrar-me</p>
						</div>
					</form>
				</div>
				<div className="h-1/4 w-full flex items-center justify-start flex-col ">
					<ButtonField text="Entrar" className="w-96" onClick={handleLogin} />
					<div className="h-12 w-full flex items-center justify-center">
						<p>Não tem conta? <Link href='/cadastro' className="text-green-500">Cadastre-se</Link></p>
					</div>
				</div>
			</div>
		</BackgroundField>
	)
}
