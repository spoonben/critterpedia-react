import * as R from "ramda";

import { bugs, fish } from "./lists.json";
import { availabilityMap } from "./components/constants"

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
  availabilty,
}) => {
  let crittersFiltered = critterToSearch;
  // Filter by the searched text
  if (searchText) {
    crittersFiltered = crittersFiltered.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  const currentMonth = new Date().getMonth() + 1; // because javascript thinks jan is 0
  switch (availabilty) {
    case availabilityMap.LEAVING:
      crittersFiltered = crittersFiltered.filter(
        (item) =>
          item.available[hemisphere].includes(currentMonth) &&
          !item.available[hemisphere].includes(currentMonth + 1)
      );
      break;
    case availabilityMap.WHENEVER:
      if (monthToFilter) {
        crittersFiltered = crittersFiltered.filter((item) =>
          item.available[hemisphere].includes(monthToFilter)
        );
      }
      break;
    case availabilityMap.NOW:
      crittersFiltered = crittersFiltered.filter((item) =>
        item.available[hemisphere].includes(currentMonth)
      );
      break;
  }
  return crittersFiltered;
};

const search = ({
  searchText,
  availabilty,
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
    availabilty,
  });
  const sortedResults = sortBy(sort)(resultsToReturn);
  return sort === "value" ? R.reverse(sortedResults) : sortedResults;
};

export default search;
