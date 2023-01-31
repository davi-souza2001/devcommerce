import Head from 'next/head'
import { AuthProvider } from '../service/context/AuthContext'
import '../styles/globals.css'

function App({ Component, pageProps }: any) {
	return (
		<AuthProvider>
			<Head>
				<link rel="icon" type="svg" sizes="32x32" href="/logo.svg" />
				<title>JoGeeker</title>
			</Head>
			<Component {...pageProps} />
		</AuthProvider>
	)
}

export default App
