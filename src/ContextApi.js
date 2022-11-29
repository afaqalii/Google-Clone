// import {} from "react"

import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
//  THE VALUE TO BE PUT IN PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <>
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </StateContext.Provider>
    </>
  );
};

export const UseStateValue = () => useContext(StateContext);
