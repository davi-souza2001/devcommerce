import { Toast } from "./ToastField"

interface BackgroundField {
	children: any
	className?: string
}

export function BackgroundField(props: BackgroundField) {
	return (
		<div className={`h-screen w-screen bg-slate-200 overflow-y-auto ${props.className}`}>
			<Toast />
			{props.children}
		</div>
	)
}
