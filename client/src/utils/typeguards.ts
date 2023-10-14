import { Office } from '../services/office-service/office.interfaces';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isOffice(object: any): object is Office {
	return 'salePointName' in object;
}
