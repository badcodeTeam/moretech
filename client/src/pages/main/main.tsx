import { Menu } from '../../components';
import { MainWrapper, StyledMap, MapContainer } from './main.styles';
import { YMaps } from '@pbe/react-yandex-maps';

export const Main = () => {
	return (
		<MainWrapper>
			<Menu />
			<YMaps>
				<MapContainer>
					<StyledMap defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
				</MapContainer>
			</YMaps>
		</MainWrapper>
	);
};
