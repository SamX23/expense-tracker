import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { Store } from "../context/GlobalContext";
import styled from "@emotion/styled";

const TransactionTable = styled.div`
  > h3 {
    padding-bottom: 5px;
    border-bottom: 1px solid black;
  }
`;

export const TransactionList = () => {
  // transaction = object.transaction > destructuring
  const { state } = useContext(Store);

  return (
    <TransactionTable>
      <h3>History</h3>
      <ul>
        {state &&
          state.length > 0 &&
          state.map((item) => <Transaction key={item.id} transaction={item} />)}
      </ul>
    </TransactionTable>
  );
};
