"use client";
// import Image from "next/image";
import { useState } from "react";
import planeData from "../data/planeData";
import PlaneDisplay from "./_components/PlaneDisplay";

/*
  TODO: How to do the comparison???

  Pass selected plane back to this component for planeOne and planeTwo.
  Compare and store which has best stat, 0 = planeOne, 1 = planeTwo, 2 = even.
  Pass the bestStat to each component so they can conditionally highlight best/worse values.

  If this doesn't work, try using reacts context api.

  NOTE: can useState be used in this top level component???
*/
export default function Home() {
  const [planeOneStats, setPlaneOneStats] = useState({
    plane_name: "A-10A",
    nation: "USA",
    rank: "VI",
    battle_rating: "10.0",
    max_speed: "642",
    turn_time: "29.0",
    climb_rate: "25.3",
    wing_rip_speed: "874",
    combat_flap_rip_speed: "",
  });
  const [planeTwoStats, setPlaneTwoStats] = useState({
    plane_name: "A-10A",
    nation: "USA",
    rank: "VI",
    battle_rating: "10.0",
    max_speed: "642",
    turn_time: "29.0",
    climb_rate: "25.3",
    wing_rip_speed: "874",
    combat_flap_rip_speed: "",
  });
  const [bestStats, setBestStats] = useState({
    battle_rating: 0,
    max_speed: 0,
    turn_time: 0,
    climb_rate: 0,
    wing_rip_speed: 0,
    combat_flap_rip_speed: 0,
  });

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex flex-col min-h-screen items-center p-24">
      <h1>Warthunder planes!!!</h1>
      <div className="flex flex-row">
        <PlaneDisplay planeData={planeData} />
        <PlaneDisplay planeData={planeData} />
      </div>
    </main>
  );
}
