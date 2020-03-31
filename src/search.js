import * as R from "ramda";

import { bugs, fish } from "./lists.json";

const critterTypes = {
	fish,
	bugs,
	both: fish.concat(bugs)
};

const sortBy = filter => R.sortBy(R.compose(R.toLower, R.prop(filter)));

const getLeavingNow = ({ baseResults, hemisphere }) => {
	const currentMonth = new Date().getMonth() + 1; // because javascript thinks jan is 0
	return baseResults.filter(
		item =>
			item.available[hemisphere].includes(currentMonth) &&
			!item.available[hemisphere].includes(currentMonth + 1)
	);
};

const search = ({
	searchText,
	leavingNow,
	hemisphere,
	sort = "name",
	critterType = "both"
}) => {
	const critterToSearch =
		critterType === "both" ? critterTypes.both : critterTypes[critterType];
	const baseResults = searchText
		? critterToSearch.filter(item =>
				item.name.toLowerCase().includes(searchText.toLowerCase())
		  )
		: critterToSearch;
	const resultsToReturn = leavingNow
		? getLeavingNow({ baseResults, hemisphere })
		: baseResults;
	return sortBy(sort)(resultsToReturn);
};

export default search;
