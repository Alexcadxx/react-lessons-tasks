import { Link } from 'react-router-dom';

import { Button, ControlPanel } from '../../components';

import styles from './not-found.module.css';

export const NotFound = () => (
	<>
		<ControlPanel>
			<Button>
				<Link to="/">&larr;</Link>
			</Button>
		</ControlPanel>
		<div className={styles.wrapper}>This page not found</div>;
	</>
);
