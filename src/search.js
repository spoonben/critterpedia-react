import { bugs, fish } from "./lists.json";

const allCritters = bugs.concat(fish);

const getLeavingNow = ({ baseResults, hemisphere }) => {
	const currentMonth = new Date().getMonth() + 1; // because javascript thinks jan is 0
	return baseResults.filter(
		item =>
			item.available[hemisphere].includes(currentMonth) &&
			!item.available[hemisphere].includes(currentMonth + 1)
	);
};

const search = ({ searchText, leavingNow, hemisphere }) => {
	console.log(leavingNow);
	const baseResults = searchText
		? allCritters.filter(item =>
				item.name.toLowerCase().includes(searchText.toLowerCase())
		  )
		: allCritters;
	return leavingNow
		? getLeavingNow({ baseResults, hemisphere })
		: baseResults;
};

export default search;
