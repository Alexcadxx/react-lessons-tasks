import * as yup from 'yup';

export const registrationFormSchema = yup.object().shape({
	email: yup.string().required('Fill email').email('Email invalid'),
	password: yup
		.string()
		.required('Fill password')
		.min(8, 'Password should not less 8 characteristic')
		.matches(/^\S+$/, 'Password includes alphabet, numbers and symbols')
		.matches(/[a-zA-Z]+/, 'Password includes alphabet, numbers and symbols')
		.matches(/[0-9]+/, 'Password includes alphabet, numbers and symbols')
		.matches(/\W+/, 'Password includes alphabet, numbers and symbols'),
	passcheck: yup
		.string()
		.required('Fill password again')
		.oneOf([yup.ref('password'), null], 'Passwords do not match'),
});
