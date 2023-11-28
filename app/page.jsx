"use client";
// import Image from "next/image";
import { useEffect, useState } from "react";
import planeData from "../data/planeData";
import PlaneDisplay from "./_components/PlaneDisplay";

export default function Home() {
  const [planeOneStats, setPlaneOneStats] = useState({
    plane_name: "",
    nation: "",
    rank: "",
    battle_rating: "",
    max_speed: "",
    turn_time: "",
    climb_rate: "",
    wing_rip_speed: "",
    combat_flap_rip_speed: "",
  });
  const [planeTwoStats, setPlaneTwoStats] = useState({
    plane_name: "",
    nation: "",
    rank: "",
    battle_rating: "",
    max_speed: "",
    turn_time: "",
    climb_rate: "",
    wing_rip_speed: "",
    combat_flap_rip_speed: "",
  });
  const [bestStats, setBestStats] = useState({
    battle_rating: "Equal",
    max_speed: "Equal",
    turn_time: "Equal",
    climb_rate: "Equal",
    wing_rip_speed: "Equal",
    combat_flap_rip_speed: "Equal",
  });

  useEffect(() => {
    // Don't compare until both planes are selected
    if (!planeOneStats.plane_name || !planeTwoStats.plane_name) {
      return;
    }
    function compareStats(stat1, stat2) {
      if (stat1 > stat2) return 1;
      if (stat1 < stat2) return -1;
      return 0; // Equal
    }

    const bestStatsObject = {
      battle_rating: compareStats(
        planeOneStats.battle_rating,
        planeTwoStats.battle_rating
      ),
      max_speed: compareStats(planeOneStats.max_speed, planeTwoStats.max_speed),
      turn_time: compareStats(planeOneStats.turn_time, planeTwoStats.turn_time),
      climb_rate: compareStats(
        planeOneStats.climb_rate,
        planeTwoStats.climb_rate
      ),
      wing_rip_speed: compareStats(
        planeOneStats.wing_rip_speed,
        planeTwoStats.wing_rip_speed
      ),
      combat_flap_rip_speed: compareStats(
        planeOneStats.combat_flap_rip_speed,
        planeTwoStats.combat_flap_rip_speed
      ),
    };

    // Mapping numerical comparison result to plane_name
    Object.keys(bestStatsObject).forEach((key) => {
      const comparisonResult = bestStatsObject[key];
      bestStatsObject[key] =
        comparisonResult === 1
          ? planeOneStats.plane_name
          : comparisonResult === -1
          ? planeTwoStats.plane_name
          : "Equal";
    });

    setBestStats(bestStatsObject);
  }, [planeOneStats, planeTwoStats]);

  return (
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
