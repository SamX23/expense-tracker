import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { Store } from "../context/GlobalContext";
import styled from "@emotion/styled";

const TransactionHistory = styled.div`
  & > h3 {
    padding-bottom: 5px;
    border-bottom: 1px solid black;
  }

  & > ul {
    margin: 0;
    padding: 0;
  }
`;

export const TransactionList = () => {
  // transaction = object.transaction > destructuring
  const { state } = useContext(Store);

  return (
    <TransactionHistory>
      <h3>History</h3>
      <ul>
        {state &&
          state.length > 0 &&
          state.map((item) => <Transaction key={item.id} transaction={item} />)}
      </ul>
    </TransactionHistory>
  );
};
