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

    function compareTurn(stat1, stat2) {
      if (stat1 < stat2) return 1;
      if (stat1 > stat2) return -1;
      return 0; // Equal
    }

    const bestStatsObject = {
      battle_rating: compareStats(
        planeOneStats.battle_rating,
        planeTwoStats.battle_rating
      ),
      max_speed: compareStats(planeOneStats.max_speed, planeTwoStats.max_speed),
      turn_time: compareTurn(planeOneStats.turn_time, planeTwoStats.turn_time),
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
    <main className="flex flex-col min-h-screen max-w-7xl p-4 mx-auto">
      {/* <h1>War Thunder Plane Comparison</h1> */}
      <h1 className="text-4xl font-extrabold text-center mt-8 mb-4">
        War Thunder Plane Comparison
      </h1>

      {/* <div className="flex flex-row"> */}
      <div className="flex flex-col md:flex-row">
        <PlaneDisplay
          planeData={planeData}
          setPlaneStats={setPlaneOneStats}
          bestStats={bestStats}
          planeOneOrTwo={"Plane One"}
        />
        <PlaneDisplay
          planeData={planeData}
          setPlaneStats={setPlaneTwoStats}
          bestStats={bestStats}
          planeOneOrTwo={"Plane Two"}
        />
      </div>
    </main>
  );
}
