import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Office } from '../services/office-service/office.interfaces';

const initialState: Array<Office> = [];

export const currentOfficesSlice = createSlice({
	name: 'currentOffices',
	initialState,
	reducers: {
		updateOffices: (state, action: PayloadAction<Array<Office>>) => {
			state = action.payload;
			return state;
		},
	},
});

export const { updateOffices } = currentOfficesSlice.actions;
