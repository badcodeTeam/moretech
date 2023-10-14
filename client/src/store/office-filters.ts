import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfficeFilter } from '../services/office-service/office.interfaces';

const initialState: UnionFilters = {
	load: false,
	rko: false,
	hasRamp: false,
	suoAvailability: false,
};

export type UnionFilters = OfficeFilter & { load: boolean };

export const officeFiltersSlice = createSlice({
	name: 'officeFilters',
	initialState,
	reducers: {
		updateFilters: (state, action: PayloadAction<keyof UnionFilters>) => {
			state = { ...state, [action.payload]: !state[action.payload] };
			return state;
		},
	},
});

export const { updateFilters } = officeFiltersSlice.actions;
