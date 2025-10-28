export const passwordMinValidator = (value) =>
	value.length >= 8 ? null : 'password should not less 8 characteristic';
