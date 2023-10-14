import { Clusterer, Placemark } from '@pbe/react-yandex-maps';
import { useGetAtmsQuery } from '../../store/api/atm/atm-slice';
import { StyledMap } from '../main/main.styles';
import okIcon from '../../assets/ok.svg';
import userIcon from '../../assets/userIcon.svg';
import { useSelector } from 'react-redux';
import { atmFiltersSelector } from '../../store';

export const Atms = () => {
	const filters = useSelector(atmFiltersSelector);

	const { data, isLoading } = useGetAtmsQuery({
		cords: { latitude: 0, longitude: 0 },
		filters,
	});

	if (isLoading) return <>Загрузка</>;
	return (
		<>
			<StyledMap
				defaultState={{ center: [55.802432, 37.704547], zoom: 15 }}
				//ref={map}
				//modules={['multiRouter.MultiRoute']}
				//onLoad={addRoute}
			>
				<Clusterer options={{ groupByCoordinates: false }}>
					{data &&
						data?.map((item) => {
							return (
								<Placemark
									key={item.id}
									geometry={[
										item.point.coordinates[1],
										item.point.coordinates[0],
									]}
									options={{
										iconLayout: 'default#image',
										iconImageHref: okIcon,
										iconImageSize: [42, 42],
									}}
									onClick={() => console.log(item.id)}
								/>
							);
						})}
				</Clusterer>

				<Placemark
					geometry={[55.802432, 37.704547]}
					options={{
						iconLayout: 'default#image',
						iconImageHref: userIcon,
						iconImageSize: [42, 42],
					}}
				/>
			</StyledMap>
		</>
	);
};
