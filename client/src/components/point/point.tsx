import { PointHeader, PointHeaderWrapper, PointProps, PointWrapper } from '.';

import { ReactComponent as PinIcon } from '../../assets/pin.svg';
import { ReactComponent as CrossIcon } from '../../assets/cross.svg';
import { ReactComponent as WayIcon } from '../../assets/way2.svg';
import { Button } from '..';

export const Point: React.FC<PointProps> = ({
	id,
	address,
	onSelect,
	isSelected,
	point,
	allDay,
}) => {
	return (
		<PointWrapper
			onClick={(event) => {
				event.stopPropagation();
				onSelect({ id, address, allDay, point }, false);
			}}>
			<PointHeaderWrapper>
				<PointHeader>{address}</PointHeader>
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
				<Button
					text="Маршрут"
					variant="contained"
					icon={<WayIcon width="24px" height="24px" />}
					onClick={(event) => {
						event.stopPropagation();
						onSelect({ id, address, allDay, point }, true);
					}}
				/>
			)}
		</PointWrapper>
	);
};
