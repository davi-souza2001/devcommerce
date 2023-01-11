import { randomUUID } from 'node:crypto'

export interface UserProps {
	id?: string
	email: string
	name: string
}

export interface AvatarProps {
	accessory: string
	body: string
	circleColor: string
	clothing: string
	clothingColor: string
	eyebrows: string
	eyes: string
	faceMask: string
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

export class User {
	private props: UserProps

	constructor(props: UserProps) {
		if (props.name.length === 0) {
			throw new Error('Name can not to be void.')
		}
		if (props.email.length === 0) {
			throw new Error('Email can not to be void.')
		}
		if (!props?.id) {
			props.id = randomUUID()
		}

		this.props = props
	}

	public get id(): string {
		return this.props.id
	}

	public set email(email: string) {
		this.props.email = email
	}

	public get email(): string {
		return this.props.email
	}

	public set name(name: string) {
		this.props.name = name
	}

	public get name(): string {
		return this.props.name
	}
}
