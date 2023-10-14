import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api';
import { atmFiltersSlice } from './atm-filters';
import { AtmFilters, AtmPoint } from '../services/atm-service/atm.interfaces';
import { currentPointsSlice } from './current-atms';
import { currentPointSlice } from './current-point';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		atmFilters: atmFiltersSlice.reducer,
		atms: currentPointsSlice.reducer,
		currentAtm: currentPointSlice.reducer,
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
