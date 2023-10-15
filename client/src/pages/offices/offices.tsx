import { useDispatch, useSelector } from 'react-redux';
import {
	currentOfficeSelector,
	currentOfficesSelector,
	officeFiltersSelector,
} from '../../store';
import { StyledMap } from '../main/main.styles';
import { useEffect, useState } from 'react';
import { YMapsApi } from '@pbe/react-yandex-maps/typings/util/typing';
import { updateOffice } from '../../store/current-office';
import { OfficeService } from '../../services/office-service/office-service';
import { updateOffices } from '../../store/current-offices';
import { Clusterer, Placemark } from '@pbe/react-yandex-maps';
import okIcon from '../../assets/ok.svg';
import currentSelected from '../../assets/currentSelected.svg';
import userIcon from '../../assets/userIcon.svg';
import currentFull from '../../assets/currentFull.svg';
import currentHalf from '../../assets/currentHalf.svg';
import half from '../../assets/half.svg';
import full from '../../assets/full.svg';
import { Map } from 'yandex-maps';
import { usePosition } from '../../hooks';

export const Offices = () => {
	const filters = useSelector(officeFiltersSelector);
	const offices = useSelector(currentOfficesSelector);
	const office = useSelector(currentOfficeSelector);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const [ymaps, setYmaps] = useState<YMapsApi | null>(null);
	const { longitude, latitude } = usePosition();

	useEffect(() => {
		setLoading(true);
		OfficeService.getOffices({
			cords: { latitude: 0, longitude: 0 },
			filters: {
				load: filters.load,
				filter: {
					rko: filters.rko,
					hasRamp: filters.hasRamp,
					suoAvailability: filters.suoAvailability,
				},
			},
		})
			.then((res) => dispatch(updateOffices(res)))
			.finally(() => setLoading(false));
	}, [dispatch, filters]);

	const getRoute = (ref: Map) => {
		if (ymaps && office.needsWay) {
			const multiRoute = new ymaps.multiRouter.MultiRoute(
				{
					// Описание опорных точек мультимаршрута.
					referencePoints: [
						[latitude, longitude],
						[office.point.coordinates[1], office.point.coordinates[0]],
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
				<Clusterer options={{ groupByCoordinates: false }}>
					{offices &&
						offices?.map((item) => {
							const currentIcon =
								(item.load < 5 && currentSelected) ||
								(item.load < 10 && currentHalf) ||
								currentFull;

							const icon =
								(item.load < 5 && okIcon) || (item.load < 10 && half) || full;

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
											(office.id === item.id && currentIcon) || icon,
										iconImageSize: [42, 42],
									}}
									onClick={() =>
										dispatch(updateOffice({ ...item, needsWay: false }))
									}
								/>
							);
						})}
				</Clusterer>
			</StyledMap>
		</>
	);
};
