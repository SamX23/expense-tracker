import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial Context
export const initialState = {
  transactions: [
    {
      id: 1,
      text: "Makan",
      amount: -120,
    },
    {
      id: 2,
      text: "Bensin",
      amount: 25,
    },
  ],
};

// create context
export const Store = createContext(initialState);

// Context Provider for component
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <Store.Provider
      value={{
        state: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </Store.Provider>
  );
};
