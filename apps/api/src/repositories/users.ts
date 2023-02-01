export interface UserCreateData {
	name: string
	email: string
}

export interface Users {
	create: (data: UserCreateData) => Promise<void>
	login: (email: string) => Promise<UserCreateData | null>
	editUser: (data: UserCreateData) => Promise<void>
}
