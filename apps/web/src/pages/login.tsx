import Link from "next/link";

export default function Login() {
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<div className="h-full w-3/4 bg-purple-500 flex items-center justify-center">
				App Name
			</div>
			<div className="h-full w-1/2 bg-slate-200">
				<div className="h-1/4 w-full flex items-end justify-center text-4xl font-semibold">
					<h1>Fazer Login</h1>
				</div>
				<div className="h-2/4 w-full flex items-center">
					<form className="h-full w-full flex items-center justify-center flex-col">
						<input
							className="my-5 h-16 w-[80%] rounded-lg outline-none text-gray-500 font-bold"
							type="text"
							placeholder="E-mail"
						/>
						<input
							className="my-5 h-16 w-[80%] rounded-lg outline-none text-gray-500 font-bold"
							type="password"
							placeholder="Senha"
						/>
						<div className="h-10 w-[80%] flex items-center">
							<input type="checkbox" className="text-3xl outline-none" />
							<p className="mx-3 text-gray-500">Lembrar-me</p>
						</div>
					</form>
				</div>
				<div className="h-1/4 w-full flex items-center justify-start flex-col ">
					<button className="h-12 w-96 flex items-center justify-center bg-green-500 rounded-lg text-xl font-semibold text-slate-200">
						Entrar
					</button>
					<div className="h-12 w-full flex items-center justify-center">
						<p>Não tem conta? <Link href='/' className="text-green-500">Cadastre-se</Link></p>
					</div>
				</div>
			</div>
		</div>
	)
}
