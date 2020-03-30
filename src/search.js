import { bugs, fish } from "./lists.json";

const allCritters = bugs.concat(fish);

const search = ({ filter, searchText }) => {
	return searchText
		? allCritters.filter(item =>
				item.name.toLowerCase().includes(searchText.toLowerCase())
		  )
		: allCritters;
};

export default search;
