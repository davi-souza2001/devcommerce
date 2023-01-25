export interface UserCreateData{
	name: string
}

export interface Users{
	create: (data: UserCreateData) => Promise<void>
}
