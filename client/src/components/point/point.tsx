import {
	ActionsWrapper,
	PointHeader,
	PointHeaderWrapper,
	PointProps,
	PointWrapper,
} from '.';

import { ReactComponent as PinIcon } from '../../assets/pin.svg';
import { ReactComponent as CrossIcon } from '../../assets/cross.svg';
import { ReactComponent as WayIcon } from '../../assets/way2.svg';
import { Button } from '..';
import { isOffice } from '../../utils/typeguards';
import { TAXI_URL } from '../../globals';
import { usePosition } from '../../hooks';

export const Point: React.FC<PointProps> = ({ item, onSelect, isSelected }) => {
	const position = usePosition();

	const handleTaxi = () => {
		window.open(
			`${TAXI_URL}?gfrom=${position.longitude}%2C${position.latitude}&gto=${item.point.coordinates[1]}%2C${item.point.coordinates[0]}&tariff=econom&lang=ru&utm_source=yamaps&utm_medium=2334692&ref=2334692`
		);
	};

	return (
		<PointWrapper
			onClick={(event) => {
				event.stopPropagation();
				if (isOffice(item)) {
					onSelect(
						{
							...item,
						},
						false
					);
				} else {
					onSelect(
						{
							id: item.id,
							address: item.address,
							allDay: item?.allDay,
							point: item.point,
						},
						false
					);
				}
			}}>
			<PointHeaderWrapper>
				<PointHeader>{item.address}</PointHeader>
				<PinIcon color={(isSelected && '#B6B6B6') || '#0085FF'} />
				{isSelected && (
					<Button
						onlyIcon
						icon={<CrossIcon color="#FF2727" />}
						onClick={(event) => {
							event.stopPropagation();
							onSelect(
								{
									id: '',
									address: '',
									allDay: false,
									point: { coordinates: [], type: '' },
								},
								false
							);
						}}
					/>
				)}
			</PointHeaderWrapper>
			{isSelected && (
				<ActionsWrapper>
					<Button
						text="Маршрут"
						variant="contained"
						icon={<WayIcon width="24px" height="24px" />}
						onClick={(event) => {
							event.stopPropagation();
							if (isOffice(item)) {
								onSelect(
									{
										...item,
									},
									true
								);
							} else {
								onSelect(
									{
										id: item.id,
										address: item.address,
										allDay: item?.allDay,
										point: item.point,
									},
									true
								);
							}
						}}
					/>
					<Button
						text="Вызвать такси"
						variant="contained"
						onClick={(event) => {
							event.stopPropagation();
							handleTaxi();
						}}
					/>
				</ActionsWrapper>
			)}
		</PointWrapper>
	);
};
