import { network } from '../../api';
import { GetOfficeProps, OfficeResponse } from './office.interfaces';

export class OfficeService {
	static url = '/api/bank';

	static async getOffices(args: GetOfficeProps): Promise<OfficeResponse> {
		const { data } = await network.post<OfficeResponse>(
			`${this.url}/locationfilters?longitude=37.704547&latitude=55.802432`,
			{
				...args.filters,
			}
		);

		return data;
	}
}
