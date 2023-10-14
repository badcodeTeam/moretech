import { Menu } from '../../components';
import { MainWrapper, MapContainer } from './main.styles';
import { YMaps } from '@pbe/react-yandex-maps';

//import { usePosition } from '../../hooks';
import { Outlet } from 'react-router-dom';

export const Main = () => {
	//const { latitude, longitude } = usePosition();

	return (
		<MainWrapper>
			<Menu />
			<YMaps>
				<MapContainer>
					<Outlet />
				</MapContainer>
			</YMaps>
		</MainWrapper>
	);
};
