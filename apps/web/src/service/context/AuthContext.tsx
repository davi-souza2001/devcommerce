import { createContext } from 'react';

interface AuthContextProps {
	teste: () => void
}


const AuthContext = createContext<AuthContextProps>({
	teste: () => { }
})

export function AuthProvider(props: any) {
	async function teste() {
		console.log('teste')
	}

	return (
		<AuthContext.Provider value={{
			teste
		}}>
			{props.children}
		</AuthContext.Provider>
	);

}

export default AuthContext;
