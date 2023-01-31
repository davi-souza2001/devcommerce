function idAvatarFormatterIn(text: string) {
	const nickFormater = text.substring(0, text.indexOf('@'))

	return nickFormater
}

function idAvatarFormatterOut(text: string) {
	//TODO: Melhorar caso o email não seja gmail
	const nickFormatter = text + '@gmail.com'

	return nickFormatter
}

export { idAvatarFormatterIn, idAvatarFormatterOut }
