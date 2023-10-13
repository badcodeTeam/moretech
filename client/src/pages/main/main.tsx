import { Menu } from '../../components';
import { MainWrapper, StyledMap, MapContainer } from './main.styles';
import { YMaps, Placemark } from '@pbe/react-yandex-maps';
import okIcon from '../../assets/ok.svg';
import userIcon from '../../assets/user.svg';
import { usePosition } from '../../hooks';
import { useRef } from 'react';
import { YMapsApi } from '@pbe/react-yandex-maps/typings/util/typing';

export const Main = () => {
	const { latitude, longitude } = usePosition();
	const map = useRef(null);

	const addRoute = (ymaps: YMapsApi) => {
		const pointA = [latitude, longitude];
		const pointB = [55.684758, 37.738521];

		const multiRoute = new ymaps.multiRouter.MultiRoute(
			{
				referencePoints: [pointA, pointB],
				params: {
					routingMode: 'pedestrian',
				},
			},
			{
				boundsAutoApply: true,
			}
		);

		if (map.current !== null) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			map.current?.geoObjects?.add(multiRoute);
		}
	};

	return (
		<MainWrapper>
			<Menu />
			<YMaps>
				<MapContainer>
					<StyledMap
						defaultState={{ center: [latitude, longitude], zoom: 9 }}
						ref={map}
						modules={['multiRouter.MultiRoute']}
						onLoad={addRoute}>
						<Placemark
							geometry={[55.684758, 37.738521]}
							options={{
								iconLayout: 'default#image',
								iconImageHref: okIcon,
								iconImageSize: [42, 42],
							}}
						/>
						<Placemark
							geometry={[latitude, longitude]}
							options={{
								iconLayout: 'default#image',
								iconImageHref: userIcon,
								iconImageSize: [24, 24],
							}}
						/>
					</StyledMap>
				</MapContainer>
			</YMaps>
		</MainWrapper>
	);
};
