import {
	PointDescription,
	PointHeader,
	PointHeaderWrapper,
	PointProps,
	PointWrapper,
} from '.';

import { ReactComponent as PinIcon } from '../../assets/pin.svg';
import { ReactComponent as CrossIcon } from '../../assets/cross.svg';
import { Button } from '..';

export const Point: React.FC<PointProps> = ({
	id,
	title,
	description,
	onSelect,
	isSelected,
}) => {
	return (
		<PointWrapper
			onClick={(event) => {
				event.stopPropagation();
				onSelect(id);
			}}>
			<PointHeaderWrapper>
				<PointHeader>{title}</PointHeader>
				<PinIcon color={(isSelected && '#B6B6B6') || '#0085FF'} />
				{isSelected && (
					<Button
						onlyIcon
						icon={<CrossIcon color="#FF2727" />}
						onClick={(event) => {
							event.stopPropagation();
							onSelect('');
						}}
					/>
				)}
			</PointHeaderWrapper>
			<PointDescription>{description}</PointDescription>
		</PointWrapper>
	);
};
