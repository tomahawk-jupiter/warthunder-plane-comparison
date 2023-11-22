"use client";
import { useState } from "react";
import NationSelect from "./inputs/NationSelect";
import Image from "next/image";

const PlaneDisplay = ({ planeData }) => {
  const [selectedPlaneName, setSelectedPlaneName] = useState("");
  const [selectedPlane, setSelectedPlane] = useState("");
  const [nationFilter, setNationFilter] = useState("");

  const handleSelectChange = (event) => {
    const planeName = event.target.value;
    console.log({ planeName });

    // Find the selected plane object based on the plane name
    const plane = planeData.find((row) => row.plane_name === planeName);

    setSelectedPlaneName(planeName);
    setSelectedPlane(plane);
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
          {planeData
            .filter((row) => row.nation === nationFilter)
            .map((filteredRow, index) => {
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

      <br />
      <br />
      <br />
      <hr />

      <h2 className="text-4xl font-extrabold">{selectedPlaneName}</h2>

      <Image src={selectedPlane.image_url} width={300} height={300} />

      <div>Nation: {selectedPlane.nation}</div>
      <div>Rank: {selectedPlane.rank}</div>
      <div>BR: {selectedPlane.battle_rating}</div>
      <div>Max Speed: {selectedPlane.max_speed}</div>
      <div>Turn Time: {selectedPlane.turn_time}</div>
      <div>Climb Rate: {selectedPlane.climb_rate}</div>
      <div>Wing Rip: {selectedPlane.wind_rip_speed}</div>
      <div>Flap Rip: {selectedPlane.combat_flap_rip_speed}</div>
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
