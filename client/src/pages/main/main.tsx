import { Menu } from '../../components';
import { MainWrapper, MapContainer } from './main.styles';
import { YMaps } from '@pbe/react-yandex-maps';

import { Outlet } from 'react-router-dom';

export const Main = () => {
	return (
		<MainWrapper>
			<Menu />
			<YMaps query={{ apikey: import.meta.env.VITE_API_KEY }}>
				<MapContainer>
					<Outlet />
				</MapContainer>
			</YMaps>
		</MainWrapper>
	);
};
