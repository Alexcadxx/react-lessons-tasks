// Устанавливаем пакеты npm i react-hook-form yup @hookform/resolvers

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

import styles from './app.module.css';
import { Field } from './components/field/field';
import { registrationFormSchema } from './registration-form-schema';

export function App() {
	const {
		register,
		handleSubmit,
		trigger,
		formState: { touchedFields, isValid, errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(registrationFormSchema),
		mode: 'onTouched',
	});

	const submitButtonRef = useRef(null);

	const onSubmit = ({ email, password }) => {
		console.log({ email, password });
	};

	useEffect(() => {
		if (isValid) {
			submitButtonRef.current.focus();
		}
	}, [isValid]);

	return (
		<div className={styles.app}>
			<h3>Form of registration</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					type="text"
					placeholder="email..."
					error={errors.email?.message}
					{...register('email')}
				/>
				<Field
					type="password"
					placeholder="password..."
					error={errors.password?.message}
					{...register('password', {
						onChange: () => touchedFields.passcheck && trigger('passcheck'),
					})}
				/>
				<Field
					type="password"
					placeholder="password check ..."
					error={errors.passcheck?.message}
					{...register('passcheck')}
				/>
				<button
					className={styles.button}
					type="submit"
					disabled={!isValid}
					ref={submitButtonRef}
				>
					Sign in
				</button>
			</form>
		</div>
	);
}
