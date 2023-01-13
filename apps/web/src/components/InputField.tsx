interface InputFieldProps {
	type: string
	placeHolder: string
	className?: string
}

export function InputField(props: InputFieldProps) {
	return (
		<input
			className={`h-16 rounded-lg outline-none text-gray-500 font-bold ${props.className}`}
			type={props.type}
			placeholder={props.placeHolder}
		/>
	)
}
