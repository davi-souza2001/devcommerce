import { AvatarCreateData, Avatars } from "../../repositories/avatars";
import { UserCreateData, Users } from "../../repositories/users";

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


}
