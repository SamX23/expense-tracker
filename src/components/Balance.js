import React, { useState } from "react";
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
  const [balance, setBalance] = useState();

  return (
    <BalanceDetails>
      <h4>Your Balance</h4>
      <h1>{"$0.00" || balance}</h1>
    </BalanceDetails>
  );
};
