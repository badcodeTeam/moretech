import { network } from '../../api';
import { AtmPoint, GetAtmProps } from './atm.interfaces';

export class AtmService {
	static url = '/api/atm';

	//?longitude=37.704547&latitude=55.802432
	static async getAtms(args: GetAtmProps): Promise<Array<AtmPoint>> {
		console.log(args);
		//const state = store.getState();
		const { data } = await network.post<Array<AtmPoint>>(
			`${this.url}/locationfilters?longitude=37.704547&latitude=55.802432`,
			{
				...args.filters,
			}
		);

		return data;
	}

	static async getFiltered(args: GetAtmProps): Promise<Array<AtmPoint>> {
		const { data } = await network.get<Array<AtmPoint>>(
			`${this.url}/ids?longitude=37.704547&latitude=55.802432`
		);

		return data;
	}
}
