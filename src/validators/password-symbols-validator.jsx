export const passwordSymbolValidator = (value) =>
	/^\S+$/.test(value) &&
	/[a-zA-Z]+/.test(value) &&
	/[0-9]+/.test(value) &&
	/\W+/.test(value)
		? null
		: 'Password includes alphabet, numbers and symbols';
