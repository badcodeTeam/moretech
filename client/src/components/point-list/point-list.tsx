import { PointListProps, PointListWrapper } from '.';
import { Point } from '..';

export const PointList: React.FC<PointListProps> = ({
	points,
	selectedPoint,
	onSelect,
}) => {
	return (
		<PointListWrapper>
			{points.map((item) => {
				return (
					<Point
						item={item}
						onSelect={onSelect}
						isSelected={selectedPoint === item.id}
					/>
				);
			})}
		</PointListWrapper>
	);
};
