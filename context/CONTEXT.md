# Using context ChatGPT solution

To use the React Context API for managing the state of data like the one you've provided, you can create a context that includes a state and a function (dispatch) for updating that state. Here's an example of how you can achieve this:

1. Create a new file for your context, for example, `PlaneDataContext.js`:

```jsx
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
```

2. Wrap your application or the relevant part of it with the `PlaneDataProvider`:

```jsx
import React from "react";
import { PlaneDataProvider } from "./PlaneDataContext";
import YourComponent from "./YourComponent";

const App = () => {
  return (
    <PlaneDataProvider>
      {/* The rest of your application */}
      <YourComponent />
    </PlaneDataProvider>
  );
};

export default App;
```

3. In the component where you need to update the plane data, use the `usePlaneDataContext` hook to access the state and dispatch function:

```jsx
import React from "react";
import { usePlaneDataContext } from "./PlaneDataContext";

const YourComponent = () => {
  const { state, dispatch } = usePlaneDataContext();

  const updatePlaneOne = (newData) => {
    dispatch({ type: "UPDATE_PLANE_ONE", payload: newData });
  };

  const updatePlaneTwo = (newData) => {
    dispatch({ type: "UPDATE_PLANE_TWO", payload: newData });
  };

  // Render your component using state.planeOne and state.planeTwo
};

export default YourComponent;
```

Now, you can use the `updatePlaneOne` and `updatePlaneTwo` functions to update the `planeOne` and `planeTwo` objects in your component.
