import { Users } from '../repositories/users'

interface SubmitUserServiceRequest {
	name: string
	email: string
}

export class SubmitUserService {
	constructor(
		private usersRepository: Users
	) { }

	async executeCreate(request: SubmitUserServiceRequest) {
		const { name, email } = request

		if (!name) {
			throw new Error('Name is required!')
		}

		if (!email) {
			throw new Error('Email is required!')
		}

		if(name.length < 3){
			throw new Error('Is required the name have more than 3 characters!')
		}

		if(!email.includes('@')){
			throw new Error('Put a valid email!')
		}

		await this.usersRepository.create({ email, name })
	}

	async executeLogin(email: string) {
		if (!email) {
			throw new Error('Email is required!')
		}

		const user = await this.usersRepository.login(email)

		return user
	}

	async executeEditUser(request: SubmitUserServiceRequest) {
		const { name, email } = request

		if (!name) {
			throw new Error('Name is required!')
		}

		if (!email) {
			throw new Error('Email is required!')
		}

		if(name.length < 3){
			throw new Error('Is required the name have more than 3 characters!')
		}

		if(!email.includes('@')){
			throw new Error('Put a valid email!')
		}

		await this.usersRepository.editUser({ email, name })
	}
}
