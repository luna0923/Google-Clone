import React, { createContext, useReducer, useContext } from 'react';

// Create Context
export const StateContext = createContext();

// State Provider Component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Custom Hook to access State Value
export const useStateValue = () => useContext(StateContext);
