import type { UkDataVariables } from '$houdini/types/src/routes/uk/$houdini';
import { getCountries } from '$lib/nav';

export function _houdini_afterLoad({event}) {
	return event.data;
}

export function _houdini_onError() {
 console.log(`!!!!!GQL error!!!!!`);
}

export const _UKDataVariables: UkDataVariables = () => {
  console.log(`!!!!!GQL query!!!!!`);
	return getCountries();
}