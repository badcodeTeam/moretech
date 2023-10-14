import { LocationSpec } from 'src/interfaces';

export const getAtmByLocation = (location: LocationSpec) => `
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
	ST_DWithin(point, 'SRID=4326;POINT(${location.longitude} ${location.latitude})', 50000) 
	AND "atm"."id" = "atmserv"."atmId" 
	AND "atmserv"."atmServicesId" = "serv"."id"
`;

export const getAtmByLocationWithFilters = (
  location: LocationSpec,
  filters: string,
) => `
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
	ST_DWithin(point, 'SRID=4326;POINT(${location.longitude} ${location.latitude})', 50000) 
	AND "atm"."id" = "atmserv"."atmId" 
	AND "atmserv"."atmServicesId" = "serv"."id"
	AND ${filters}
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
