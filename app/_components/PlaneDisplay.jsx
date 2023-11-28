"use client";
import { useEffect, useState } from "react";
import usePlaneFilter from "./hooks/usePlaneFilter";
import NationSelect from "./inputs/NationSelect";
import Image from "next/image";
import Stat from "./Stat";
import RankSelect from "./inputs/RankSelect";
import BattleRatingSelect from "./inputs/BattleRatingSelect";

const PlaneDisplay = ({ planeData, setPlaneStats, bestStats }) => {
  const [selectedPlaneName, setSelectedPlaneName] = useState("Select Above");
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
    <div>
      <div>
        <label htmlFor="planeSelector">Plane Name:</label>
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
      {/* 
        TODO: make this checkbox filter functional, 
        ie. filter the available planes available in the planeSelector 
        */}

      <BattleRatingSelect
        battleRatingFilter={battleRatingFilter}
        setBattleRatingFilter={setBattleRatingFilter}
      />

      <br />
      <br />

      <h2 className="text-4xl font-extrabold">{selectedPlaneName}</h2>

      <Image
        src={
          selectedPlane.image_url ||
          "https://wiki.warthunder.com/images/d/de/Img_plane.png"
        }
        alt={selectedPlaneName}
        width={300}
        height={300}
        className="w-80 h-50 object-cover"
      />

      {/*
        battle_rating: 0,
        max_speed: 0,
        turn_time: 0,
        climb_rate: 0,
        wing_rip_speed: 0,
        combat_flap_rip_speed: 0,
    */}

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

/**** Type in text input and see a list of options as you type *****/

/* <input
  type="text"
  list="planeList"
  name="planeSelector"
  id="planeSelector"
  value={selectedPlaneName}
  onChange={handleSelectChange}
  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
  // className="form-select"
/>

<datalist
  id="planeList"
  className="absolute z-10 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg"
>
  <option value="--Choose plane--" />
  {planeData.map((row) => {
    return <option key={row.plane_name} value={row.plane_name} />;
  })}
</datalist> */
