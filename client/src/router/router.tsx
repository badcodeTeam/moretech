import { Routes, Route } from 'react-router-dom';
import { Main } from '../pages';

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
		</Routes>
	);
};
