import Head from 'next/head'
import { AuthProvider } from '../service/context/AuthContext'
import { ToastProvider } from '../service/context/ToastContext'
import { ProductProvider } from '../service/context/ProductContext'
import '../styles/globals.css'

function App({ Component, pageProps }: any) {
	return (
		<ToastProvider>
			<AuthProvider>
				<ProductProvider>
					<Head>
						<link rel="icon" type="svg" sizes="32x32" href="/logo.svg" />
						<title>JoGeeker</title>
					</Head>
					<Component {...pageProps} />
				</ProductProvider>
			</AuthProvider>
		</ToastProvider>
	)
}

export default App
