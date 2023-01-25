export interface UserCreateData{
	name: string
	email: string
}

export interface Users{
	create: (data: UserCreateData) => Promise<void>
}
