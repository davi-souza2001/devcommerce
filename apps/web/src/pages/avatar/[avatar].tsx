import { BigHead } from "@bigheads/core";

export default function Avatar() {
	return (
		<div className="h-screen w-screen bg-slate-200 overflow-y-auto">
			<div className="h-20 w-full flex items-center justify-center text-4xl font-semibold">
				<h1>Edite seu avatar</h1>
			</div>
			<div className="h-72 w-full flex items-center justify-center bg-purple-500">
				<div className="h-72 w-72">
					<BigHead
						accessory="tinyGlasses"
						body="breasts"
						circleColor="blue"
						clothing="dressShirt"
						clothingColor="blue"
						eyebrows="raised"
						eyes="normal"
						faceMask={false}
						faceMaskColor="white"
						facialHair="mediumBeard"
						graphic="redwood"
						hair="afro"
						hairColor="white"
						hat="none3"
						hatColor="red"
						lashes={false}
						lipColor="green"
						mask
						mouth="tongue"
						skinTone="light"
					/>
				</div>
			</div>
			<div className="w-full flex items-center justify-center flex-col bg-red-500">
				<div className="h-20 w-full flex items-center justify-center text-2xl font-semibold">
					<p>Opções</p>
				</div>
				<form className="w-full flex items-center justify-center flex-col">
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Acessório</option>
					</select>
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Corpo</option>
					</select>
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Cor do Círculo</option>
					</select>
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Roupas</option>
					</select>
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Cor da Roupa</option>
					</select>
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Sobrancelhas</option>
					</select>
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Olhos</option>
					</select>
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Máscara</option>
					</select>
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Pêlos Faciais</option>
					</select>
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Tecnologia</option>
					</select>
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Cabelo</option>
					</select>
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Cor de Cabelo</option>
					</select>
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Chapéu</option>
					</select>
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Cor do Chapéu</option>
					</select>
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Cor dos Lábios</option>
					</select>
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Boca</option>
					</select>
					<select className="h-16 w-96 rounded-lg outline-none text-gray-500 font-bold my-3">
						<option value="teste">Tom de Pele</option>
					</select>
				</form>
			</div>
		</div>
	)
}
