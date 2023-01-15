import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase';

interface AuthContextProps {
	user: User
	createAccount: (user: User) => void
	loginAccount: (email: string, password: string) => void
	logoutInFirebase: () => void
}

interface User {
	name: string
	email: string
	password: string
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
		console.log('teste')
		createUserInFirebase(user.email, user.password)
	}

	function loginAccount(email: string, password: string) {
		loginUserInFirebase(email, password)
	}

	function createUserInFirebase(email: string, password: string) {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user
				console.log(user)
			})
			.catch((error) => {
				const errorMessage = error.message
				console.log(errorMessage)
			})
	}

	function loginUserInFirebase(email: string, password: string) {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user
				console.log(user)
			})
			.catch((error) => {
				const errorMessage = error.message
				console.log(errorMessage)
			})
	}

	function getUserInFirebase() {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid
				console.log(uid)
			} else {
				console.log('User is signed out')
			}
		})
	}

	function logoutInFirebase() {
		signOut(auth).then(() => {
			console.log('Sign-out successful')
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
