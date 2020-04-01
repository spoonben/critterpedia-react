import * as R from "ramda";

import { monthMap } from "./components/constants";

import { bugs, fish } from "./lists.json";

const critterTypes = {
	fish,
	bugs,
	both: fish.concat(bugs)
};

const sortBy = filter => R.sortBy(R.prop(filter));

const filterEverything = ({
	monthsToFilter,
	hemisphere,
	critterToSearch,
	searchText,
	leavingNow
}) => {
	let crittersFiltered = critterToSearch;
	if (searchText) {
		crittersFiltered = crittersFiltered.filter(item =>
			item.name.toLowerCase().includes(searchText.toLowerCase())
		);
	}
	if (leavingNow) {
		const currentMonth = new Date().getMonth() + 1; // because javascript thinks jan is 0
		crittersFiltered = crittersFiltered.filter(
			item =>
				item.available[hemisphere].includes(currentMonth) &&
				!item.available[hemisphere].includes(currentMonth + 1)
		);
	}
	if (!leavingNow && monthsToFilter.length > 0) {
		crittersFiltered = crittersFiltered.filter(item => {
			const isAvailable = month =>
				item.available[hemisphere].includes(month);
			return R.all(isAvailable)(monthsToFilter);
		});
	}
	return crittersFiltered;
};

const search = ({
	searchText,
	leavingNow,
	hemisphere,
	monthsToFilter,
	sort = "name",
	critterType = "both"
}) => {
	const critterToSearch =
		critterType === "both" ? critterTypes.both : critterTypes[critterType];

	return sortBy(sort)(
		filterEverything({
			critterToSearch,
			hemisphere,
			monthsToFilter,
			searchText,
			leavingNow
		})
	);
};

export default search;
