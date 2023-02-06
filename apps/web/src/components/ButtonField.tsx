interface ButtonField {
	text: string
	className?: string
	type?: "button" | "submit" | "reset"
	onClick?: () => void
}

export function ButtonField(props: ButtonField) {
	return (
		<button className={`h-12 flex items-center justify-center  rounded-lg text-xl font-semibold text-white transition-all ${props.className}`}
			type={props.type ?? 'submit'}
			onClick={props.onClick}
		>
			{props.text}
		</button>
	)
}
