import { Route, Routes } from 'react-router-dom';

import styles from './app.module.css';
import { MainPage, NotFound, TodoPage } from './pages';

export function App() {
	return (
		<div className={styles.app}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/task" element={<TodoPage />} />
				<Route path="/task/:id" element={<TodoPage />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}
