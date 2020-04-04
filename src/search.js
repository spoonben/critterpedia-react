import * as R from "ramda";

import { bugs, fish } from "./lists.json";

const critterTypes = {
  fish,
  bugs,
  both: fish.concat(bugs),
};

const sortBy = (filter) => R.sortBy(R.prop(filter));

const filterEverything = ({
  monthToFilter,
  hemisphere,
  critterToSearch,
  searchText,
  leavingNow,
}) => {
  let crittersFiltered = critterToSearch;
  // Filter by the searched text
  if (searchText) {
    crittersFiltered = crittersFiltered.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  // Filter by "Leaving this month"
  if (leavingNow) {
    const currentMonth = new Date().getMonth() + 1; // because javascript thinks jan is 0
    crittersFiltered = crittersFiltered.filter(
      (item) =>
        item.available[hemisphere].includes(currentMonth) &&
        !item.available[hemisphere].includes(currentMonth + 1)
    );
  }
  // Filter by month
  if (!leavingNow && monthToFilter) {
    crittersFiltered = crittersFiltered.filter((item) =>
      item.available[hemisphere].includes(monthToFilter)
    );
  }
  return crittersFiltered;
};

const search = ({
  searchText,
  leavingNow,
  hemisphere,
  monthToFilter,
  sort = "name",
  critterType = "both",
}) => {
  const critterToSearch =
    critterType === "both" ? critterTypes.both : critterTypes[critterType];
  const resultsToReturn = filterEverything({
    monthToFilter,
    hemisphere,
    critterToSearch,
    searchText,
    leavingNow,
  });
  const sortedResults = sortBy(sort)(resultsToReturn);
  return sort === "value" ? R.reverse(sortedResults) : sortedResults;
};

export default search;
