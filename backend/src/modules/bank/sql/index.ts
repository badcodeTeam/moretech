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
	'workloads', workload.workload
    )) 
FROM 
	public."Bank" as bank, 
	public."BankWorkload" as workload 
WHERE 
	ST_DWithin(point, 'SRID=4326;POINT(${location.longitude} ${location.latitude})', 10000) 
	AND "bank"."workloadId" = "workload"."id" 
`;

export const getBankIdsByLocation = (location: LocationSpec) => `
SELECT  json_agg(json_build_object(
    'id',bank."id",
    'salePointName',"salePointName",
    'address',"address",
    'rko',"rko",
    'openHours',"openHours",
    'openHoursIndividual',"openHoursIndividual",
    'point',ST_AsGeoJSON("point")::jsonb
))
FROM public."Bank" as bank WHERE ST_DWithin(point, 'SRID=4326;POINT(${location.longitude} ${location.latitude})', 10000) 
`;

export const getById = (id: string) => `
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
	'workloads', workload.workload
    )) 
FROM 
	public."Bank" as bank, 
	public."BankWorkload" as workload 
WHERE 
	"bank"."id" = '${id}' 
	AND "bank"."workloadId" = "workload"."id" 
`;