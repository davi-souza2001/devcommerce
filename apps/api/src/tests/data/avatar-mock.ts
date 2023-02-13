import { AvatarCreateData, Avatars } from "../../repositories/avatars"

export class AvatarsMock implements Avatars {
	private avatars: AvatarCreateData[] = []

	async create({
		accessory,
		body,
		circleColor,
		clothing,
		clothingColor,
		eyebrows,
		eyes,
		faceMask,
		facialHair,
		graphic,
		hair,
		hairColor,
		hat,
		hatColor,
		idUser,
		lipColor,
		mouth,
		skinTone
	}: AvatarCreateData) {
		if (body && clothing) {
			this.avatars.push({
				accessory,
				body,
				circleColor,
				clothing,
				clothingColor,
				eyebrows,
				eyes,
				faceMask,
				facialHair,
				graphic,
				hair,
				hairColor,
				hat,
				hatColor,
				idUser,
				lipColor,
				mouth,
				skinTone
			})
		}
	}

	async get(id: string){
		const avatar = this.avatars.find(avatar => avatar.idUser === id)

		return avatar ?? null
	}
}
