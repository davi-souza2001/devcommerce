import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Router from 'next/router';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase';
import UseFetch from '../hook/useFetch';

interface AuthContextProps {
	user: User
	createAccount: (user: User) => void
	loginAccount: (email: string, password: string) => void
	logoutInFirebase: () => void
}

interface User {
	id?: string
	name: string
	email: string
	password?: string
}

const AuthContext = createContext<AuthContextProps>({
	user: {
		name: '',
		email: '',
		password: ''
	},
	createAccount: () => { },
	loginAccount: () => { },
	logoutInFirebase: () => { }
})

export function AuthProvider(props: any) {
	const [user, setUser] = useState<User>({
		name: '',
		email: '',
		password: ''
	})

	function createAccount(user: User) {
		createUserInFirebase(user.email, user.password ?? '')
		UseFetch('http://localhost:3001/user/create', 'POST', {
			email: user.email,
			name: user.name
		}).then(() => Router.push('/login'))
			.catch(err => console.log(err))
	}

	function loginAccount(email: string, password: string) {
		loginUserInFirebase(email, password)
		UseFetch('http://localhost:3001/user/login', 'POST', { email })
			.then(res => {
				setUser({
					id: res.id,
					email: res.email,
					name: res.name
				})
				Router.push('/')
			})
			.catch(err => console.log(err))
	}

	function createUserInFirebase(email: string, password: string) {
		createUserWithEmailAndPassword(auth, email, password)
			.catch((error) => console.log(error.message))
	}

	function loginUserInFirebase(email: string, password: string) {
		signInWithEmailAndPassword(auth, email, password)
			.catch((error) => console.log(error.message))
	}

	function getUserInFirebase() {
		onAuthStateChanged(auth, (userSearch) => {
			if (userSearch) {
				const user: User = {
					email: userSearch.email ?? '',
					name: userSearch.displayName ?? ''
				}
				setUser(user)
			} else {
				Router.push('/login')
			}
		})
	}

	function logoutInFirebase() {
		signOut(auth).then(() => {
			console.log('Sign-out successful')
			Router.push('/login')
		}).catch(() => {
			console.log('An error happened')
		})
	}

	useEffect(() => {
		getUserInFirebase()
	}, [])

	return (
		<AuthContext.Provider value={{
			user,
			createAccount,
			loginAccount,
			logoutInFirebase
		}}>
			{props.children}
		</AuthContext.Provider>
	);

}

export default AuthContext;
