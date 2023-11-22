import React, { createContext, useContext, useReducer } from "react";

// Define your initial data
const initialData = {
  planeOne: {
    plane_name: "Hunter FGA.9",
    nation: "Britain",
    rank: "VI",
    battle_rating: "9.3",
    max_speed: "1,148",
    turn_time: "25.0",
    climb_rate: "70.0",
    wing_rip_speed: "1,225",
    combat_flap_rip_speed: "603",
  },
  planeTwo: {
    plane_name: "Hunter FGA.9",
    nation: "Britain",
    rank: "VI",
    battle_rating: "9.3",
    max_speed: "1,148",
    turn_time: "25.0",
    climb_rate: "70.0",
    wing_rip_speed: "1,225",
    combat_flap_rip_speed: "603",
  },
};

// Create a context
const PlaneDataContext = createContext();

// Create a reducer function
const planeDataReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PLANE_ONE":
      return { ...state, planeOne: action.payload };
    case "UPDATE_PLANE_TWO":
      return { ...state, planeTwo: action.payload };
    default:
      return state;
  }
};

// Create a provider component
export const PlaneDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(planeDataReducer, initialData);

  return (
    <PlaneDataContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaneDataContext.Provider>
  );
};

// Custom hook for using the plane data context
export const usePlaneDataContext = () => {
  const context = useContext(PlaneDataContext);
  if (!context) {
    throw new Error(
      "usePlaneDataContext must be used within a PlaneDataProvider"
    );
  }
  return context;
};
