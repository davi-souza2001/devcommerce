interface BackgroundField{
	children: any
	className?: string
}

export function BackgroundField(props: BackgroundField){
	return (
		<div className={`h-screen w-screen bg-gradient-to-r from-purple-500 to-purple-600 ${props.className}`}>
			{props.children}
		</div>
	)
}
