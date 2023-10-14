import { AtmPoint } from '../../services/atm-service/atm.interfaces';

export interface PointListProps {
	points: Array<AtmPoint>;
	selectedPoint: string;
	onSelect: (value: AtmPoint, needsWay?: boolean) => void;
}
