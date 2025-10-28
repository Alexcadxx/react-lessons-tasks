import { useEffect, useRef, useState } from 'react';

import styles from './app.module.css';
import { Field } from './components/field/field';
import {
	emailValidator,
	passwordMinValidator,
	passwordSymbolValidator,
} from './validators';

export function App() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passcheck, setPasscheck] = useState('');

	const [isEmailValid, setIsEmailValid] = useState(false);
	const [isPasswordValid, setIsPasswordValid] = useState(false);
	const [isPasscheckValid, setIsPasscheckValid] = useState(false);

	const submitButtonRef = useRef(null);

	const onSubmit = (event) => {
		event.preventDefault();
		console.log({ email, password });
	};

	const isFormValid = isEmailValid && isPasswordValid && isPasscheckValid;

	useEffect(() => {
		if (isFormValid) {
			submitButtonRef.current.focus();
		}
	}, [isFormValid]);

	return (
		<div className={styles.app}>
			<h3>Form of registration</h3>
			<form onSubmit={onSubmit}>
				<Field
					type="text"
					name="email"
					placeholder="email..."
					value={email}
					setValue={setEmail}
					setIsValid={setIsEmailValid}
					validators={[emailValidator]}
				/>
				<Field
					type="password"
					name="password"
					placeholder="password..."
					value={password}
					setValue={setPassword}
					setIsValid={setIsPasswordValid}
					validators={[passwordMinValidator, passwordSymbolValidator]}
				/>
				<Field
					type="password"
					name="passcheck"
					placeholder="password check ..."
					value={passcheck}
					setValue={setPasscheck}
					setIsValid={setIsPasscheckValid}
					validators={[(value) => (value === password ? null : 'Passwords do not match')]}
					dependencies={{ password }} // --> Используем объект вместо массива ['password'], так как в объекте имеются наименования поля и значение поля. В массиве - только наименовавние. Здесь для нас нужно именно значение поля
					forceValidation={(value) => value.length > 0}
				/>
				<button
					className={styles.button}
					type="submit"
					disabled={!isFormValid}
					ref={submitButtonRef}
				>
					Sign in
				</button>
			</form>
		</div>
	);
}
