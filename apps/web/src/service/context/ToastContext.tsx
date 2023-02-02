import { createContext, useState } from "react"

interface ToastAlert {
	msg: string
	type: 'success' | 'error' | 'info' | 'warning'
}

interface ToastContextProps {
	openToast: (data: ToastAlert) => void
	msg: string
	type: 'success' | 'error' | 'info' | 'warning'
	open: boolean
}

const ToastContext = createContext<ToastContextProps>({
	openToast: () => { },
	msg: '',
	type: "success",
	open: false
})

export function ToastProvider(props: any) {
	const [open, setOpen] = useState(false)
	const [msg, setMsg] = useState('')
	const [type, setType] = useState<'success' | 'error' | 'info' | 'warning'>('success')

	function openToast(data: ToastAlert) {
		console.log('Passei aqui')
		setOpen(true)
		setMsg(data.msg)
		setType(data.type)
	}

	console.log(open)

	return (
		<ToastContext.Provider value={{
			openToast,
			open,
			msg,
			type
		}}>
			{props.children}
		</ToastContext.Provider>
	)

}

export default ToastContext
