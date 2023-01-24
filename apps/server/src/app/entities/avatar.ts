import { randomUUID } from 'node:crypto'

export interface AvatarProps {
	id?: string
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

export class Avatar {
	private props: AvatarProps

	constructor(props: AvatarProps) {
		if (props.clothing.length === 0) {
			throw new Error('accessory can not to be void.')
		}
		if (props.idUser.length === 0) {
			throw new Error('idUser can not to be void.')
		}
		if (props.body.length === 0) {
			throw new Error('body can not to be void.')
		}

		if (!props?.id) {
			props.id = randomUUID()
		}

		this.props = props
	}

	public get id(): string {
		return this.props.id
	}

	public set accessory(accessory: string) {
		this.props.accessory = accessory
	}

	public get accessory(): string {
		return this.props.accessory
	}

	public set idUser(idUser: string) {
		this.props.idUser = idUser
	}

	public get idUser(): string {
		return this.props.idUser
	}

	public set body(body: string) {
		this.props.body = body
	}

	public get body(): string {
		return this.props.body
	}

	public set circleColor(circleColor: string) {
		this.props.circleColor = circleColor
	}

	public get circleColor(): string {
		return this.props.circleColor
	}

	public set clothing(clothing: string) {
		this.props.clothing = clothing
	}

	public get clothing(): string {
		return this.props.clothing
	}

	public set clothingColor(clothingColor: string) {
		this.props.clothingColor = clothingColor
	}

	public get clothingColor(): string {
		return this.props.clothingColor
	}

	public set eyebrows(eyebrows: string) {
		this.props.eyebrows = eyebrows
	}

	public get eyebrows(): string {
		return this.props.eyebrows
	}

	public set eyes(eyes: string) {
		this.props.eyes = eyes
	}

	public get eyes(): string {
		return this.props.eyes
	}

	public set faceMask(faceMask: boolean) {
		this.props.faceMask = faceMask
	}

	public get faceMask(): boolean {
		return this.props.faceMask
	}

	public set facialHair(facialHair: string) {
		this.props.facialHair = facialHair
	}

	public get facialHair(): string {
		return this.props.facialHair
	}

	public set graphic(graphic: string) {
		this.props.graphic = graphic
	}

	public get graphic(): string {
		return this.props.graphic
	}

	public set hair(hair: string) {
		this.props.hair = hair
	}

	public get hair(): string {
		return this.props.hair
	}

	public set hairColor(hairColor: string) {
		this.props.hairColor = hairColor
	}

	public get hairColor(): string {
		return this.props.hairColor
	}

	public set hat(hat: string) {
		this.props.hat = hat
	}

	public get hat(): string {
		return this.props.hat
	}

	public set hatColor(hatColor: string) {
		this.props.hatColor = hatColor
	}

	public get hatColor(): string {
		return this.props.hatColor
	}

	public set lipColor(lipColor: string) {
		this.props.lipColor = lipColor
	}

	public get lipColor(): string {
		return this.props.lipColor
	}

	public set mouth(mouth: string) {
		this.props.mouth = mouth
	}

	public get mouth(): string {
		return this.props.mouth
	}

	public set skinTone(skinTone: string) {
		this.props.skinTone = skinTone
	}

	public get skinTone(): string {
		return this.props.skinTone
	}
}
