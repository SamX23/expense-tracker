import React from "react";
import styled from "@emotion/styled";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const bg = sign === "+" ? "green" : "pink";

  const TransactionItem = styled.li`
    display: flex;
    width: 100%;
    background-color: ${bg};
    justify-content: space-between;
    padding: 10px;
    position: relative;
    & > button {
      border: 0;
      position: absolute;
      left: 0;
      opacity: 1;
      & :hover {
        opacity: 0;
      }
    }
    & > span {
      background-color: white;
    }
  `;

  return (
    <TransactionItem>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button>X</button>
    </TransactionItem>
  );
};
