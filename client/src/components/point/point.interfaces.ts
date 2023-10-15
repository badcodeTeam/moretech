import { AtmPoint } from '../../services/atm-service/atm.interfaces';
import { Office } from '../../services/office-service/office.interfaces';

export interface PointProps {
	item: AtmPoint | Office;
	isSelected: boolean;
	onSelect: (value: AtmPoint | Office, needsWay?: boolean) => void;
}

export interface OfficePointProps extends Office {
	isSelected: boolean;
	onSelect: (value: Office, needsWay?: boolean) => void;
}
