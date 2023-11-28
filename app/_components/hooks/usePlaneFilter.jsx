import { useEffect, useState } from "react";

const usePlaneFilter = (planeData) => {
  const [filteredData, setFilteredData] = useState(planeData);
  const [nationFilter, setNationFilter] = useState("All");
  const [rankFilter, setRankFilter] = useState("All");
  const [battleRatingFilter, setBattleRatingFilter] = useState("All");

  const filterPlanes = (data, filters) => {
    return data.filter((plane) => {
      const filterByNation =
        filters.nation === "All" || plane.nation === filters.nation;
      const filterByRank =
        filters.rank === "All" || plane.rank === filters.rank;
      const filterByBattleRating =
        filters.battle_rating === "All" ||
        plane.battle_rating == filters.battle_rating;

      return filterByNation && filterByRank && filterByBattleRating;
    });
  };

  useEffect(() => {
    const filters = {
      nation: nationFilter,
      rank: rankFilter,
      battle_rating: battleRatingFilter,
    };
    setFilteredData(filterPlanes(planeData, filters));
  }, [nationFilter, rankFilter, battleRatingFilter, planeData]);

  return {
    filteredData,
    setNationFilter,
    setRankFilter,
    setBattleRatingFilter,
    nationFilter,
    rankFilter,
    battleRatingFilter,
  };
};

export default usePlaneFilter;
