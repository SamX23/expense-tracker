import React, { useState, useContext, useEffect } from "react";
import { Store } from "../context/GlobalContext";

import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  > h5 {
    margin: 0;
  }
  > input {
    width: 100%;
  }
`;

export const TransactionForm = () => {
  const { state, dispatch } = useContext(Store);
  const [balance, setBalance] = useState({
    id: 0,
    text: "",
    amount: 0,
  });

  useEffect(() => {
    console.log(balance);
    console.log(state);
  }, [balance]);

  const AddTransaction = (e) => {
    e.preventDefault();
    console.log("push");
    dispatch({
      type: "PUSH",
      item: balance,
    });
    console.log(balance);
  };

  return (
    <div>
      <h4>Add new transaction</h4>
      <Form onSubmit={AddTransaction}>
        <FormGroup>
          <h5>Text</h5>
          <input
            type="text"
            value={balance.text}
            onChange={(e) => setBalance({ ...balance, text: e.target.value })}
            placeholder="Enter text.."
          />
        </FormGroup>
        <FormGroup>
          <h5>Amount (negative-expense, posistive-income)</h5>
          <input
            type="number"
            value={balance.amount}
            onChange={(e) => setBalance({ ...balance, amount: e.target.value })}
            placeholder="Enter amount.."
          />
        </FormGroup>
        <button type="submit">Add transaction</button>
      </Form>
    </div>
  );
};
