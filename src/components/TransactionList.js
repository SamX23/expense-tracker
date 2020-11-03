import React, { useContext, useEffect, useState } from "react";
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
  // transaction = object.transaction
  const context = useContext(Store);
  const [{ state }, dispatch] = useState(context);
  const transaction = state.transaction;

  return (
    <TransactionTable>
      <h3>History</h3>
      <ul>
        {transaction &&
          transaction.length > 0 &&
          transaction.map((item) => (
            <Transaction key={item.id} transaction={item} />
          ))}
      </ul>
    </TransactionTable>
  );
};
