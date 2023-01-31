export interface AvatarCreateData {
	idUser: string
	accessory: string
	body: string
	circleColor: string
	clothing: string
	clothingColor: string
	eyebrows: string
	eyes: string
	faceMask: boolean
	facialHair: string
	graphic: string
	hair: string
	hairColor: string
	hat: string
	hatColor: string
	lipColor: string
	mouth: string
	skinTone: string
}

export interface Avatars {
	create: (data: AvatarCreateData) => Promise<void>
	get: (id: string) => Promise<AvatarCreateData | null>
}
