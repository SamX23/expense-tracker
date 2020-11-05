import React, { useContext } from "react";
import { Store } from "../context/GlobalContext";

import styled from "@emotion/styled";

const BalanceDetails = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  > h4,
  h1 {
    margin: 0;
    padding: 0;
  }
`;

export const Balance = () => {
  const { state } = useContext(Store);

  const amounts = state.map((transaction) => transaction.amount);
  const total =
    amounts.length > 0 && amounts.reduce((acc, item) => (acc += item));

  return (
    <BalanceDetails>
      <h4>Your Balance</h4>
      <h1>
        {total < 0 ? "-" : ""}${Math.abs(total).toFixed(2)}
      </h1>
    </BalanceDetails>
  );
};
