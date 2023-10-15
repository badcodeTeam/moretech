import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api';
import { atmFiltersSlice } from './atm-filters';
import { AtmFilters, AtmPoint } from '../services/atm-service/atm.interfaces';
import { currentPointsSlice } from './current-atms';
import { currentPointSlice } from './current-point';
import { UnionFilters, officeFiltersSlice } from './office-filters';
import { currentOfficesSlice } from './current-offices';
import { Office } from '../services/office-service/office.interfaces';
import { currentOfficeSlice } from './current-office';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		atmFilters: atmFiltersSlice.reducer,
		atms: currentPointsSlice.reducer,
		currentAtm: currentPointSlice.reducer,
		officeFilters: officeFiltersSlice.reducer,
		currentOffices: currentOfficesSlice.reducer,
		currentOffice: currentOfficeSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export const atmFiltersSelector = (state: RootState): AtmFilters =>
	state.atmFilters;

export const atmsSelector = (state: RootState): Array<AtmPoint> => state.atms;

export const atmSelector = (
	state: RootState
): AtmPoint & { needsWay: boolean } => state.currentAtm;

export const officeFiltersSelector = (state: RootState): UnionFilters =>
	state.officeFilters;

export const currentOfficesSelector = (state: RootState): Array<Office> =>
	state.currentOffices;

export const currentOfficeSelector = (
	state: RootState
): Office & { needsWay: boolean } => state.currentOffice;
