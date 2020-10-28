import React, { useState } from "react";
import styled from "@emotion/styled";

const BalanceTable = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(255, 255, 255, 0.8);
  > div:first-of-type {
    border-right: 1px solid #dedede;
  }
`;

const Balance = styled.div`
  flex: 1;
  text-align: center;
  > p {
    font-weight: 900;
    font-size: 30px;
    margin: 15px;
  }
`;

const BalanceIncome = styled.p`
  color: rgb(0, 190, 0);
`;

const BalanceOutcome = styled.p`
  color: rgb(211, 0, 0);
`;

export const IncomeBalance = () => {
  const [income, setIncome] = useState();
  const [outcome, setOutcome] = useState();

  return (
    <BalanceTable>
      <Balance>
        <h2>Income</h2>
        <BalanceIncome>{"$0.00" || income}</BalanceIncome>
      </Balance>
      <Balance>
        <h2>Outcome</h2>
        <BalanceOutcome>{"$0.00" || outcome}</BalanceOutcome>
      </Balance>
    </BalanceTable>
  );
};
