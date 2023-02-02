import Head from 'next/head'
import { AuthProvider } from '../service/context/AuthContext'
import { ToastProvider } from '../service/context/ToastContext'
import '../styles/globals.css'

function App({ Component, pageProps }: any) {
	return (
		<AuthProvider>
			<ToastProvider>
				<Head>
					<link rel="icon" type="svg" sizes="32x32" href="/logo.svg" />
					<title>JoGeeker</title>
				</Head>
				<Component {...pageProps} />
			</ToastProvider>
		</AuthProvider>
	)
}

export default App
