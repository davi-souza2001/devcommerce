import { AvatarProps } from "@bigheads/core"

const teste: AvatarProps = {
	skinTone: "yellow"
}

export class AvatarOptions {
	static accessory(): string[] {
		const data = ['none', 'roundGlasses', 'tinyGlasses', 'shades']

		return data
	}

	static body(): string[] {
		const data = ['chest', 'breasts']

		return data
	}

	static clothing(): string[] {
		const data = ['naked', 'dress', 'dressShirt', 'shirt', 'tankTop', 'vneck']

		return data
	}

	static clothingColor(): string[] {
		const data = ['black', 'blue', 'red', 'green', 'white']

		return data
	}

	static eyebrows(): string[] {
		const data = ['angry', 'concerned', 'leftLowered', 'raised', 'serious']

		return data
	}

	static eyes(): string[] {
		const data = ['content', 'dizzy', 'happy', 'heart', 'leftTwitch', 'normal', 'simple', 'squint', 'wink']

		return data
	}

	static boolean(): boolean[] {
		const data = [true, false]

		return data
	}

	static facialHair(): string[] {
		const data = ['none', 'mediumBeard', 'stubble']

		return data
	}

	static graphic(): string[] {
		const data = [ 'none', 'react', 'redwood', 'vue', 'graphQL']

		return data
	}

	static hair(): string[] {
		const data = ['afro', 'balding', 'bob', 'bun', 'buzz', 'long', 'pixie', 'short', 'none']

		return data
	}

	static hairColor(): string[] {
		const data = ['black', 'blonde', 'blue', 'orange', 'brown', 'pink', 'white']

		return data
	}

	static hat(): string[] {
		const data = ['none', 'beanie', 'turban']

		return data
	}

	static hatColor(): string[] {
		const data = ['black', 'white', 'blue', 'red']

		return data
	}

	static lipColor(): string[] {
		const data = ['red', 'green', 'pink', 'turqoise']

		return data
	}

	static mouth(): string[] {
		const data = ['grin', 'lips', 'open', 'openSmile', 'sad', 'serious', 'tongue']

		return data
	}

	static skinTone(): string[] {
		const data = ['black', 'brown', 'dark', 'light', 'red', 'yellow']

		return data
	}
}
