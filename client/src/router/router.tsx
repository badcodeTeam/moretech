import { Routes, Route, Navigate } from 'react-router-dom';
import { Main } from '../pages';
import { Atms } from '../pages/atms';
import { Offices } from '../pages/offices';

export const Router = () => {
	return (
		<Routes>
			<Route path="/map" element={<Main />}>
				<Route path="atms" element={<Atms />} />
				<Route path="offices" element={<Offices />} />
			</Route>
			<Route path="*" element={<Navigate to="/map/atms" />} />
		</Routes>
	);
};
