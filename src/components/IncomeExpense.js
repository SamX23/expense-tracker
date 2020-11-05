import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Store } from "../context/GlobalContext";

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
  color: rgb(0, 150, 0);
`;

const BalanceOutcome = styled.p`
  color: rgb(300, 0, 0);
`;

export const IncomeBalance = () => {
  const { state } = useContext(Store);
  const amounts = state.map((transaction) => transaction.amount);

  const income = amounts
    // show only item amounts more than 0
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const outcome =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <BalanceTable>
      <Balance>
        <h2>Income</h2>
        <BalanceIncome>{income}</BalanceIncome>
      </Balance>
      <Balance>
        <h2>Outcome</h2>
        <BalanceOutcome>{outcome}</BalanceOutcome>
      </Balance>
    </BalanceTable>
  );
};
