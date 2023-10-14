import { atmApi } from '../store/api/atm/atm-slice';

export const useAtms = () => {
	const { data } = atmApi.useGetAtmsQuery(null, {
		selectFromResult: ({ data }) => ({
			data: data ?? [],
		}),
	});

	return data;
};
