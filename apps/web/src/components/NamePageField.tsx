interface NamePageFieldProps{
	name: string
}

export function NamePageField(props: NamePageFieldProps){
	return (
		<div className="h-20 w-full flex items-center justify-start">
				<h1 className="p-10 font-semibold text-2xl">{props.name}</h1>
			</div>
	)
}
