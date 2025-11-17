import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { deleteTodo, updateTodo, createTodo, readTodo } from '../../api';
import { Button, ControlPanel } from '../../components';

import styles from './todo-page.module.css';

export const TodoPage = () => {
	const [title, setTitle] = useState('');
	const { id } = useParams();
	const navigate = useNavigate();

	const onTitleChange = ({ target }) => setTitle(target.value);

	const onRemove = () => deleteTodo(id).then(() => navigate('/'));

	const onSave = () => {
		if (id === undefined) {
			createTodo({ title, completed: false }).then(() => navigate('/'));
		} else {
			updateTodo({ id, title }).then(() => navigate('/'));
		}
	};

	useEffect(() => {
		readTodo(id).then((loadedTodo) => {
			if (loadedTodo.title === undefined) {
				navigate('/task');
			}
			setTitle(loadedTodo.title);
		});
	}, [id, navigate]);

	return (
		<>
			<ControlPanel>
				<Button>
					<Link to="/">&larr;</Link>
				</Button>
				<Button onClick={onRemove}>❌</Button>
				<Button onClick={onSave}>✎</Button>
			</ControlPanel>
			<div>
				<textarea className={styles.title} value={title} onChange={onTitleChange} />
			</div>
		</>
	);
};
