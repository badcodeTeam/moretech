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
			<YMaps
			//query={{ apikey: '3400eb80-ece5-4bd2-ae42-cd72f7e968d9' }}
			>
				<MapContainer>
					<Outlet />
				</MapContainer>
			</YMaps>
		</MainWrapper>
	);
};
