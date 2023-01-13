interface ButtonField{
	text: string
	color?: string
	className?: string
}

export function ButtonField(props: ButtonField) {
	return (
		<button className={`h-12 flex items-center justify-center  rounded-lg text-xl font-semibold text-slate-200 transition-all ${props.color ? `bg-${props.color} hover:bg` : "bg-green-500 hover:bg-green-600"} ${props.className}`}>
			{props.text}
		</button>
	)
}
