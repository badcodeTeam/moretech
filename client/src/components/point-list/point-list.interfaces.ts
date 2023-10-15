import { AtmPoint } from '../../services/atm-service/atm.interfaces';
import { Office } from '../../services/office-service/office.interfaces';

export interface PointListProps {
	points: Array<AtmPoint | Office>;
	selectedPoint: string;
	onSelect: (value: AtmPoint | Office, needsWay?: boolean) => void;
}
