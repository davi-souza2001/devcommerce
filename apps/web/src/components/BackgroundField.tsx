interface BackgroundField{
	children: any
	className?: string
}

export function BackgroundField(props: BackgroundField){
	return (
		<div className={`h-screen w-screen bg-slate-200 ${props.className}`}>
			{props.children}
		</div>
	)
}
