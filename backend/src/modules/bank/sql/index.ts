import { LocationSpec } from 'src/interfaces';

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
	'workloads', workload.workload,
    'load', workload.load
    )) 
FROM 
	public."Bank" as bank, 
	public."BankWorkload" as workload 
WHERE 
	ST_DWithin(point, 'SRID=4326;POINT(${location.longitude} ${location.latitude})', 50000) 
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
    'point',ST_AsGeoJSON("point")::jsonb,
    'load', workload.load
))
FROM public."Bank" as bank, public."BankWorkload" as workload 
WHERE ST_DWithin(point, 'SRID=4326;POINT(${location.longitude} ${location.latitude})', 50000) 
AND "bank"."workloadId" = "workload"."id" 
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
	'workloads', workload.workload,
    'load', workload.load
    )) 
FROM 
	public."Bank" as bank, 
	public."BankWorkload" as workload 
WHERE 
	"bank"."id" = '${id}' 
	AND "bank"."workloadId" = "workload"."id" 
`;

export const byLoad = (location: LocationSpec) => `
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
	'workloads', workload.workload,
	'load', workload.load
    )) 
FROM 
	public."Bank" as bank, 
	public."BankWorkload" as workload 
WHERE 
	ST_DWithin(point, 'SRID=4326;POINT(${location.longitude} ${location.latitude})', 50000) 
	AND "bank"."workloadId" = "workload"."id"
GROUP BY "workload"."load"
ORDER BY "workload"."load" ASC
`;

export const byLoadWithFilters = (location: LocationSpec, filters: string) => `
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
	'workloads', workload.workload,
	'load', workload.load
    )) 
FROM 
	public."Bank" as bank, 
	public."BankWorkload" as workload 
WHERE 
	ST_DWithin(point, 'SRID=4326;POINT(${location.longitude} ${location.latitude})', 50000) 
	AND "bank"."workloadId" = "workload"."id"
    AND ${filters}
GROUP BY "workload"."load"
ORDER BY "workload"."load" ASC
`;

export const getBankWithFilters = (location: LocationSpec, filters: string) => `
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
	'workloads', workload.workload,
    'load', workload.load
    )) 
FROM 
	public."Bank" as bank, 
	public."BankWorkload" as workload 
WHERE 
	ST_DWithin(point, 'SRID=4326;POINT(${location.longitude} ${location.latitude})', 50000) 
	AND "bank"."workloadId" = "workload"."id" 
    AND ${filters}
`;
