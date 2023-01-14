import { AuthProvider } from '../service/context/AuthContext';
import '../styles/globals.css';

function App({ Component, pageProps }: any) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	)
}

export default App
