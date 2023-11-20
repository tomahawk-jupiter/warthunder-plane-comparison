"use client";
import { useState } from "react";

const PlaneDisplay = ({ planeData }) => {
  const [selectedPlaneName, setSelectedPlaneName] = useState("");
  const [selectedPlane, setSelectedPlane] = useState("");

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
          {planeData.map((row, index) => {
            return (
              <option key={row.plane_name + index} value={row.plane_name}>
                {row.plane_name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="nationSelector">Nation:</label>
        <select
          name="nationSelector"
          id="nationSelector"
          // value={selectedPlaneName}
          // onChange={handleSelectChange}
        >
          <option value="">--Choose nation--</option>
          <option value="USA">USA</option>
          <option value="USA">Britain</option>
        </select>
      </div>

      <br />
      <br />
      <br />
      <hr />

      <h2 className="text-4xl font-extrabold">{selectedPlaneName}</h2>

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
