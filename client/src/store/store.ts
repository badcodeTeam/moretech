import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api';
import { atmFiltersSlice } from './atm-filters';
import { AtmFilters } from '../services/atm-service/atm.interfaces';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		atmFilters: atmFiltersSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export const atmFiltersSelector = (state: RootState): AtmFilters =>
	state.atmFilters;
