import { Clusterer, Placemark } from '@pbe/react-yandex-maps';
import { StyledMap } from '../main/main.styles';
import okIcon from '../../assets/ok.svg';
import currentSelected from '../../assets/currentSelected.svg';
import userIcon from '../../assets/userIcon.svg';
import ghost from '../../assets/ghost.svg';
import face from '../../assets/face-in-clouds.svg';
import { useDispatch, useSelector } from 'react-redux';
import { atmFiltersSelector, atmSelector, atmsSelector } from '../../store';
import { useEffect, useState } from 'react';
import { AtmService } from '../../services/atm-service/atm-service';
import { updatePoints } from '../../store/current-atms';
import { YMapsApi } from '@pbe/react-yandex-maps/typings/util/typing';
import { Map } from 'yandex-maps';
import { updatePoint } from '../../store/current-point';
import { usePosition } from '../../hooks';

export const Atms = () => {
	const filters = useSelector(atmFiltersSelector);
	const atms = useSelector(atmsSelector);
	const atm = useSelector(atmSelector);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const [ymaps, setYmaps] = useState<YMapsApi | null>(null);
	const { longitude, latitude } = usePosition();

	useEffect(() => {
		setLoading(true);
		AtmService.getAtms({ cords: { latitude, longitude }, filters })
			.then((res) => dispatch(updatePoints(res)))
			.finally(() => setLoading(false));
	}, [dispatch, filters, latitude, longitude]);

	const getRoute = (ref: Map) => {
		if (ymaps && atm.needsWay) {
			const multiRoute = new ymaps.multiRouter.MultiRoute(
				{
					// Описание опорных точек мультимаршрута.
					referencePoints: [
						[latitude, longitude],
						[atm.point.coordinates[1], atm.point.coordinates[0]],
					],
					// Параметры маршрутизации.
					params: {
						// Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
						results: 2,
					},
				},
				{
					// Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
					boundsAutoApply: true,
					// Внешний вид линии маршрута.
					routeActiveStrokeWidth: 6,
					routeActiveStrokeColor: '#fa6600',
				}
			);

			// Кладем полученный маршрут в переменную
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			ref.geoObjects.add(multiRoute);
		}
	};

	if (loading) return <>Загрузка</>;

	return (
		<>
			<StyledMap
				defaultState={{ center: [latitude, longitude], zoom: 15 }}
				instanceRef={(ref) => ref && getRoute(ref)}
				modules={['multiRouter.MultiRoute']}
				onLoad={(maps) => setYmaps(maps)}>
				<Placemark
					geometry={[latitude, longitude]}
					options={{
						iconLayout: 'default#image',
						iconImageHref: userIcon,
						iconImageSize: [42, 42],
					}}
				/>
				<Placemark
					geometry={[55.751962, 37.629489]}
					options={{
						iconLayout: 'default#image',
						iconImageHref: ghost,
						iconImageSize: [42, 42],
					}}
					onClick={() =>
						window.open(
							'https://www.vtb.ru/personal/karty/kreditnye/vozmozhnosti/'
						)
					}
				/>
				<Placemark
					geometry={[55.770496, 37.608176]}
					options={{
						iconLayout: 'default#image',
						iconImageHref: face,
						iconImageSize: [42, 42],
					}}
					onClick={() => window.open('https://www.vtb.ru/promo/pens-vklad/')}
				/>
				<Clusterer options={{ groupByCoordinates: false }}>
					{atms &&
						atms.map((item) => {
							return (
								<Placemark
									key={item.id}
									geometry={[
										item.point.coordinates[1],
										item.point.coordinates[0],
									]}
									options={{
										iconLayout: 'default#image',
										iconImageHref:
											(atm.id === item.id && currentSelected) || okIcon,
										iconImageSize: [42, 42],
									}}
									onClick={() =>
										dispatch(updatePoint({ ...item, needsWay: false }))
									}
								/>
							);
						})}
				</Clusterer>
			</StyledMap>
		</>
	);
};
