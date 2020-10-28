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
  const [balanceCount, setBalanceCount] = useState();

  return (
    <BalanceDetails>
      <h4>Your Balance</h4>
      <h1 className="balance__count">{"$0.00" || balanceCount}</h1>
    </BalanceDetails>
  );
};
