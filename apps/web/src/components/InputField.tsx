import { ChangeEventHandler, useEffect, useState } from "react"

interface InputFieldProps {
	type: string
	placeHolder: string
	className?: string
	value: string
	onChange: ChangeEventHandler<HTMLInputElement>
	readonly?: boolean
}

export function InputField(props: InputFieldProps) {

	return (
		<input
			className={`h-16 rounded-lg outline-none text-gray-500 font-bold ${props.className}`}
			type={props.type}
			placeholder={props.placeHolder}
			onChange={props.onChange}
			value={props.value}
			readOnly={props.readonly ?? false}
		/>
	)
}
