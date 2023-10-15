import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AtmPoint } from '../services/atm-service/atm.interfaces';

const initialState: AtmPoint & { needsWay: boolean } = {
	id: '',
	address: '',
	allDay: false,
	point: { type: '', coordinates: [] },
	needsWay: false,
};

export const currentPointSlice = createSlice({
	name: 'currentAtms',
	initialState,
	reducers: {
		updatePoint: (
			state,
			action: PayloadAction<AtmPoint & { needsWay: boolean }>
		) => {
			state = action.payload;
			return state;
		},
	},
});

export const { updatePoint } = currentPointSlice.actions;
