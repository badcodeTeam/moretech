import { AtmService } from '../../../services/atm-service/atm-service';
import {
	AtmPoint,
	GetAtmProps,
} from '../../../services/atm-service/atm.interfaces';
import { apiSlicePromiseWrapper } from '../../../utils';
import { apiSlice } from '../api';

export const atmApi = apiSlice.injectEndpoints({
	endpoints: (build) => ({
		getAtms: build.query<Array<AtmPoint>, GetAtmProps>({
			queryFn: (args: GetAtmProps) =>
				apiSlicePromiseWrapper(() => AtmService.getAtms(args)),
			providesTags: ['ATMS'],
		}),
	}),
});

export const { useGetAtmsQuery, useLazyGetAtmsQuery } = atmApi;
