"use client";
import { useState } from "react";
import usePlaneFilter from "./hooks/usePlaneFilter";
import NationSelect from "./inputs/NationSelect";
import Image from "next/image";
import Stat from "./Stat";
import RankSelect from "./inputs/RankSelect";
import BattleRatingSelect from "./inputs/BattleRatingSelect";

const PlaneDisplay = ({
  planeData,
  setPlaneStats,
  bestStats,
  planeOneOrTwo,
}) => {
  const [selectedPlaneName, setSelectedPlaneName] = useState(planeOneOrTwo);
  const [selectedPlane, setSelectedPlane] = useState("");

  const {
    filteredData,
    setNationFilter,
    setRankFilter,
    setBattleRatingFilter,
    nationFilter,
    rankFilter,
    battleRatingFilter,
  } = usePlaneFilter(planeData);

  const handleSelectChange = (event) => {
    const planeName = event.target.value;
    const plane = planeData.find((row) => row.plane_name === planeName);

    setSelectedPlaneName(planeName);
    setSelectedPlane(plane);
    setPlaneStats(plane);
  };

  return (
    <div className="flex-1 m-8">
      <div className="border p-4">
        <h3 className="font-extrabold">{planeOneOrTwo}</h3>
        <div>
          <label className="w-28 inline-block" htmlFor="planeSelector">
            Plane Name:
          </label>
          <select
            name="planeSelector"
            id="planeSelector"
            value={selectedPlaneName}
            onChange={handleSelectChange}
          >
            <option value="">--Choose plane--</option>
            {filteredData.map((filteredRow, index) => {
              return (
                <option
                  key={`${filteredRow.plane_name}${index}`}
                  value={filteredRow.plane_name}
                >
                  {filteredRow.plane_name}
                </option>
              );
            })}
          </select>
        </div>
        <NationSelect
          nationFilter={nationFilter}
          setNationFilter={setNationFilter}
        />

        <RankSelect rankFilter={rankFilter} setRankFilter={setRankFilter} />

        <BattleRatingSelect
          battleRatingFilter={battleRatingFilter}
          setBattleRatingFilter={setBattleRatingFilter}
        />
      </div>

      <br />
      <br />

      <h2 className="text-3xl font-extrabold h-20">{selectedPlaneName}</h2>

      <Image
        src={
          selectedPlane.image_url ||
          "https://wiki.warthunder.com/images/d/de/Img_plane.png"
        }
        alt={selectedPlaneName}
        width={300}
        height={300}
        className="w-full h-auto max-w-3xl object-cover"
      />

      <div>
        <span>Nation:</span>
        <span>{selectedPlane.nation}</span>
      </div>
      <div>
        <span>Rank:</span>
        <span>{selectedPlane.rank}</span>
      </div>

      <Stat
        statLabel={"BR"}
        statValue={selectedPlane.battle_rating}
        selectedPlaneName={selectedPlaneName}
        bestStat={bestStats.battle_rating}
      />
      <Stat
        statLabel={"Max Speed"}
        statValue={selectedPlane.max_speed}
        selectedPlaneName={selectedPlaneName}
        bestStat={bestStats.max_speed}
      />
      <Stat
        statLabel={"Turn Time"}
        statValue={selectedPlane.turn_time}
        selectedPlaneName={selectedPlaneName}
        bestStat={bestStats.turn_time}
      />
      <Stat
        statLabel={"Climb Rate"}
        statValue={selectedPlane.climb_rate}
        selectedPlaneName={selectedPlaneName}
        bestStat={bestStats.climb_rate}
      />
      <Stat
        statLabel={"Wing Rip"}
        statValue={selectedPlane.wind_rip_speed}
        selectedPlaneName={selectedPlaneName}
        bestStat={bestStats.wind_rip_speed}
      />
      <Stat
        statLabel={"Flap Rip"}
        statValue={selectedPlane.combat_flap_rip_speed}
        selectedPlaneName={selectedPlaneName}
        bestStat={bestStats.combat_flap_rip_speed}
      />
    </div>
  );
};

export default PlaneDisplay;
