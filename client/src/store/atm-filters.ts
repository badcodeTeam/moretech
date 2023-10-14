import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AtmFilters } from '../services/atm-service/atm.interfaces';

const initialState: AtmFilters = {
	wheelchair: false,
	blind: false,
	nfcForBankCards: false,
	qrRead: false,
	supportsUsd: false,
	supportsChargeRub: false,
	supportsEur: false,
	supportsRub: false,
};

export const atmFiltersSlice = createSlice({
	name: 'atmFilters',
	initialState,
	reducers: {
		updateFilters: (state, action: PayloadAction<keyof AtmFilters>) => {
			state = { ...state, [action.payload]: !state[action.payload] };
			return state;
		},
	},
});

export const { updateFilters } = atmFiltersSlice.actions;
