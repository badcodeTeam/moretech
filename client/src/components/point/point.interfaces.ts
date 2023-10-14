import { AtmPoint } from '../../services/atm-service/atm.interfaces';

export interface PointProps extends AtmPoint {
	isSelected: boolean;
	onSelect: (value: AtmPoint, needsWay?: boolean) => void;
}
