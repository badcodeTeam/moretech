import { Cords, MapPoint } from '../atm-service/atm.interfaces';

export interface OpenDays {
	days: string;
	hours: string;
}

export interface Office {
	id: string;
	salePointName: string;
	address: string;
	point: MapPoint;
	status: 'открытая' | 'закрытая';
	rko: string;
	officeType: string;
	suoAvailability: string;
	hasRamp: string;
	metroStation: string;
	distance: number;
	kep: boolean;
	myBranch: boolean;
	openHours: Array<OpenDays>;
	workloads: Record<string, number>;
	load: number;
}

export type OfficeResponse = Array<Office>;

export interface OfficeFilter {
	rko: boolean;
	hasRamp: boolean;
	suoAvailability: boolean;
}

export interface GetOfficeFilters {
	load: boolean;
	filter: OfficeFilter;
}

export interface GetOfficeProps {
	cords: Cords;
	filters: GetOfficeFilters;
}
