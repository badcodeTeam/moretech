export interface Cords {
	longitude: number;
	latitude: number;
}

export interface GetAtmProps {
	cords: Cords;
	filters?: AtmFilters;
}

export interface AtmFilters {
	wheelchair: boolean;
	blind: boolean;
	nfcForBankCards: boolean;
	qrRead: boolean;
	supportsUsd: boolean;
	supportsChargeRub: boolean;
	supportsEur: boolean;
	supportsRub: boolean;
}

export interface MapPoint {
	type: string;
	coordinates: Array<number>;
}

export interface AtmPoint {
	id: string;
	address: string;
	allDay: boolean;
	point: MapPoint;
}
