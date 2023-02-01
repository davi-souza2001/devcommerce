import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import Router from 'next/router'
import { createContext, useEffect, useReducer, useState } from 'react'
import { auth } from '../../firebase'
import UseFetch from '../hook/useFetch'

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
		UseFetch('http://localhost:3333/user/create', 'POST', {
			email: user.email,
			name: user.name
		}).catch(err => console.log(err))
	}

	function loginAccount(email: string, password: string) {
		loginUserInFirebase(email, password)
		UseFetch('http://localhost:3333/user/login', 'POST', { email })
			.then(res => {
				setUser({
					id: res.id,
					email: res.email,
					name: res.name
				})
				Router.push('/')
			})
			.catch(err => console.log(err.message))
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
					name: ''
				}
				UseFetch('http://localhost:3333/user/login', 'POST', {
					email: userSearch.email
				}).then(userComplete => {
					setUser({
						...user,
						id: userComplete.id,
						name: userComplete.name
					})
				})
					.catch(err => console.log(err))
			} else {
				Router.push('/login')
			}
		})
	}

	function logoutInFirebase() {
		signOut(auth).then(() => Router.push('/login'))
			.catch(() => console.log('An error happened'))
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
	)

}

export default AuthContext
