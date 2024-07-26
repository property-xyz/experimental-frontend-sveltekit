import type { PageServerLoad } from './$types';
import { getPrimaryAdminAreas, getCountiesByRegion, getGeographicRegions, getCountiesByAdminArea } from '@property-xyz/postcodes';

export const load = ((event) => {
	return { ukGeo: getUKGeographicStructure() };
}) satisfies PageServerLoad;

// AREA -> REGION -> COUNTIES
function getUKGeographicStructure(): FullArea[] {
	const areasToKeep = ['england', 'wales', 'scotland'];

	return getPrimaryAdminAreas('uk')
		.filter((area: Area) => areasToKeep.includes(area.id))
		.map((area: Area) => {
			const regions = getGeographicRegions(area.name);
			if (regions.length > 0) {
				return {
					...area,
					regions: regions.map((region: Area) => ({
						...region,
						counties: getCountiesByRegion(region.name)
					}))
				};
			} else {
				return {
					...area,
					counties: getCountiesByAdminArea(area.name)
				};
			}
		});
}

interface Area {
	id: string;
	name: string;
}
interface Region extends Area {
	counties: Area[];
}
interface FullArea extends Area {
	regions: Region[];
}