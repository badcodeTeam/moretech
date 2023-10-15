import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AtmPoint } from '../services/atm-service/atm.interfaces';

const initialState: Array<AtmPoint> = [];

export const currentPointsSlice = createSlice({
	name: 'currentAtms',
	initialState,
	reducers: {
		updatePoints: (state, action: PayloadAction<Array<AtmPoint>>) => {
			state = action.payload;
			return state;
		},
	},
});

export const { updatePoints } = currentPointsSlice.actions;
