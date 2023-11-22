"use client";
// import Image from "next/image";
import { useEffect, useState } from "react";
import planeData from "../data/planeData";
import PlaneDisplay from "./_components/PlaneDisplay";

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

  useEffect(() => {
    // TODO: what if values are the same? Store as 2?
    const bestStatsObject = {
      battle_rating:
        planeOneStats.battle_rating > planeTwoStats.battle_rating
          ? planeOneStats.plane_name
          : planeTwoStats.plane_name,
      max_speed:
        planeOneStats.max_speed > planeTwoStats.max_speed
          ? planeOneStats.plane_name
          : planeTwoStats.plane_name,
      turn_time:
        planeOneStats.turn_time < planeTwoStats.turn_time
          ? planeOneStats.plane_name
          : planeTwoStats.plane_name,
      climb_rate:
        planeOneStats.climb_rate > planeTwoStats.climb_rate
          ? planeOneStats.plane_name
          : planeTwoStats.plane_name,
      wing_rip_speed:
        planeOneStats.wing_rip_speed > planeTwoStats.wing_rip_speed
          ? planeOneStats.plane_name
          : planeTwoStats.plane_name,
      combat_flap_rip_speed:
        planeOneStats.combat_flap_rip_speed >
        planeTwoStats.combat_flap_rip_speed
          ? planeOneStats.plane_name
          : planeTwoStats.plane_name,
    };

    setBestStats(bestStatsObject);
  }, [planeOneStats, planeTwoStats]);

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex flex-col min-h-screen items-center p-24">
      <h1>Warthunder planes!!!</h1>
      <div className="flex flex-row">
        <PlaneDisplay
          planeData={planeData}
          setPlaneStats={setPlaneOneStats}
          bestStats={bestStats}
        />
        <PlaneDisplay
          planeData={planeData}
          setPlaneStats={setPlaneTwoStats}
          bestStats={bestStats}
        />
      </div>
    </main>
  );
}
