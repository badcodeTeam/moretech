import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Office } from '../services/office-service/office.interfaces';

const initialState: Office & { needsWay: boolean } = {
	id: '',
	address: '',
	salePointName: '',
	point: { type: '', coordinates: [] },
	needsWay: false,
	status: 'закрытая',
	rko: '',
	officeType: '',
	suoAvailability: 'N',
	hasRamp: 'N',
	metroStation: '',
	distance: 0,
	kep: false,
	myBranch: false,
	openHours: [],
	workloads: {
		monday: 0,
	},
	load: 0,
};

export const currentOfficeSlice = createSlice({
	name: 'currentOffice',
	initialState,
	reducers: {
		updateOffice: (
			state,
			action: PayloadAction<Office & { needsWay: boolean }>
		) => {
			state = action.payload;
			return state;
		},
	},
});

export const { updateOffice } = currentOfficeSlice.actions;
