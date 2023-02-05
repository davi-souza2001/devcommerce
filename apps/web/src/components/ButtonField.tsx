interface ButtonField {
	text: string
	color?: "red" | "blue" | "yellow"
	className?: string
	type?: "button" | "submit" | "reset"
	onClick?: () => void
}

export function ButtonField(props: ButtonField) {
	return (
		<button className={`h-12 flex items-center justify-center  rounded-lg text-xl font-semibold text-white transition-all ${props.color ? `bg-${props.color}-500 hover:bg-${props.color}-600` : "bg-green-500 hover:bg-green-600"} ${props.className}`}
			type={props.type ?? 'submit'}
			onClick={props.onClick}
		>
			{props.text}
		</button>
	)
}
