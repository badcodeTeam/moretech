import { network } from '../../api';
import { AtmPoint, GetAtmProps } from './atm.interfaces';

export class AtmService {
	static url = '/api/atm';

	//?longitude=37.704547&latitude=55.802432
	static async getAtms(args: GetAtmProps): Promise<Array<AtmPoint>> {
		const { data } = await network.post<Array<AtmPoint>>(
			`${this.url}/locationfilters?longitude=37.704547&latitude=55.802432`,
			{
				...args.filters,
			}
		);

		return data;
	}
}
