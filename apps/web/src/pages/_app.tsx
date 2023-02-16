import Head from 'next/head'
import { CartProvider } from '../service/context/CartContext'
import { AuthProvider } from '../service/context/AuthContext'
import { ToastProvider } from '../service/context/ToastContext'
import { ProductProvider } from '../service/context/ProductContext'
import { WishlistProvider } from '../service/context/WishlistContext'
import '../styles/globals.css'

function App({ Component, pageProps }: any) {
	return (
		<ToastProvider>
			<CartProvider>
				<AuthProvider>
					<ProductProvider>
						<WishlistProvider>
							<Head>
								<link rel="icon" type="svg" sizes="32x32" href="/logo.svg" />
								<title>JoGeeker</title>
							</Head>
							<Component {...pageProps} />
						</WishlistProvider>
					</ProductProvider>
				</AuthProvider>
			</CartProvider>
		</ToastProvider>
	)
}

export default App
