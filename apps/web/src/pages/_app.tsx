import Head from 'next/head'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { CartProvider } from '../service/context/CartContext'
import { AuthProvider } from '../service/context/AuthContext'
import { ToastProvider } from '../service/context/ToastContext'
import { ProductProvider } from '../service/context/ProductContext'
import { WishlistProvider } from '../service/context/WishlistContext'
import '../styles/globals.css'

function App({ Component, pageProps }: any) {
	const config = {
		initialColorMode: 'dark',
		useSystemColorMode: false,
	}

	const theme = extendTheme({ config })

	return (
		<ChakraProvider theme={theme}>
			<ToastProvider>
				<CartProvider>
					<AuthProvider>
						<ProductProvider>
							<WishlistProvider>
								<Head>
									<title>DevCommerce</title>
								</Head>
								<Component {...pageProps} />
							</WishlistProvider>
						</ProductProvider>
					</AuthProvider>
				</CartProvider>
			</ToastProvider>
		</ChakraProvider>
	)
}

export default App
