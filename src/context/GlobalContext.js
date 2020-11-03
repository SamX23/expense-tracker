import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const Store = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </Store.Provider>
  );
};
