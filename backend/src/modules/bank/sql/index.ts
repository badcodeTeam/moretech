import { LocationSpec } from "src/interfaces";

export const getBankByLocation = (location: LocationSpec) => `
SELECT json_agg(json_build_object(
    'id',bank."id",
    'salePointName',"salePointName",
    'address',"address",
    'point',ST_AsGeoJSON("point")::jsonb,
    'status',"status",
    'rko',"rko",
    'officeType',"officeType",
    'salePointFormat',"salePointFormat",
    'suoAvailability',"suoAvailability",
    'hasRamp',"hasRamp",
    'metroStation',"metroStation",
    'distance',"distance",
    'kep',"kep",
    'myBranch',"myBranch",
    'openHours',"openHours",
    'openHoursIndividual',"openHoursIndividual",
	'workloads', workload.workload)) 
FROM 
	public."Bank" as bank, 
	public."BankWorkload" as workload 
WHERE 
	ST_DWithin(point, 'SRID=4326;POINT(${location.longitude} ${location.latitude})', 10000) 
	AND "bank"."workloadId" = "workload"."id" 
`;

export const getAtmIdsByLocation = (location: LocationSpec) => `
SELECT  json_agg(json_build_object(
    'id',atm."id",
    'address',"address",
    'allDay',"allDay",
    'point',ST_AsGeoJSON("point")::jsonb
))
FROM public."Atm" as atm WHERE ST_DWithin(point, 'SRID=4326;POINT(${location.longitude} ${location.latitude})', 10000) 
`;

export const getById = (id: string) => `
SELECT json_agg(json_build_object(
    'id',atm."id",
    'address',"address",
    'allDay',"allDay",
    'point',ST_AsGeoJSON("point")::jsonb,
	'services', serv)) 
FROM 
	public."Atm" as atm, 
	public."atm_services_atm_services" as atmserv, 
	public."AtmServices"  as serv
WHERE 
	"atm"."id" = '${id}' 
	AND "atm"."id" = "atmserv"."atmId" 
	AND "atmserv"."atmServicesId" = "serv"."id"
`;