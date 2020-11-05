import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Store } from "../context/GlobalContext";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(Store);
  const sign = transaction.amount < 0 ? "-" : "+";
  const bg = sign === "+" ? "green" : "pink";

  const TransactionItem = styled.li`
    display: flex;
    width: 100%;
    background-color: ${bg};
    justify-content: space-between;
    padding: 10px 0;
    position: relative;

    & > .Transaction__text {
      margin-left: 25px;
    }

    & > .Transaction__amount {
      font-weight: 900;
      margin-right: 20px;
    }

    & > button {
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: red;
      font-weight: 900;
      opacity: 1;
      border: 0;
      & :hover {
        opacity: 0;
      }
    }
  `;

  return (
    <TransactionItem>
      <span className="Transaction__text">{transaction.text}</span>
      <span className="Transaction__amount">
        {sign} ${Math.abs(transaction.amount)}
      </span>
      <button onClick={() => deleteTransaction(transaction.id)}>X</button>
    </TransactionItem>
  );
};
