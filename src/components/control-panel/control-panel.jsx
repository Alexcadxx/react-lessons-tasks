import { useState } from 'react';

import { Button } from '../button/button';

import styles from './control-panel.module.css';

export const ControlPanel = ({ onTodoAdd }) => {
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isSortingEnable, setIsSortingEnable] = useState(false);

	const onSearchPhraseChange = (target) => {
		setSearchPhrase(target.value);
	};

	const onSortingChange = (target) => {
		setIsSortingEnable(target.checked);
	};

	return (
		<div className={styles.controlPanel}>
			<input
				className={styles.search}
				type="text"
				placeholder="Search..."
				value={searchPhrase}
				onChange={onSearchPhraseChange}
			/>
			<input
				className={styles.sortingButton}
				type="checkbox"
				checked={isSortingEnable}
				onChange={onSortingChange}
			/>
			<Button onClick={onTodoAdd}>✚</Button>
		</div>
	);
};
