/*
{
        "id": "4074a7b4-f4ea-4575-8eb0-9e4239a4fd4d",
        "salePointName": "ДО «Лобня» Филиала № 7701 Банка ВТБ (ПАО)",
        "address": "141730, Московская область, г. Лобня, ул. Ленина, д. 9",
        "point": {
            "type": "Point",
            "coordinates": [
                37.482059,
                56.012386
            ]
        },
        "status": "открытая",
        "rko": "есть РКО",
        "officeType": "Да (Зона Привилегия)",
        "salePointFormat": "Универсальный",
        "suoAvailability": "Y",
        "hasRamp": "N",
        "metroStation": "МЦД-1 Белорусско-Савёловский диаметр, станция Лобня",
        "distance": 29989,
        "kep": true,
        "myBranch": false,
        "openHours": [
            {
                "days": "пн",
                "hours": "10:00-19:00"
            }
        ],
        "openHoursIndividual": [
            {
                "days": "пн",
                "hours": "10:00-20:00"
            }
        ],
        "workloads": {
            "friday": 6,
            "monday": 0,
            "sunday": 7,
            "tuesday": 9,
            "saturday": 2,
            "thursday": 1,
            "wednesday": 5
        },
        "load": 5
    },
*/

import { MapPoint } from '../atm-service/atm.interfaces';

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
	openHours: Array<string>;
}
