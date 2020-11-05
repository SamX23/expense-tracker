import React, { useState, useContext } from "react";
import { Store } from "../context/GlobalContext";

import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  & > h4 {
    border-bottom: 1px solid black;
  }
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
  const { addTransaction } = useContext(Store);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const SubmitTransaction = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <div>
      <h4>Add new transaction</h4>
      <Form onSubmit={SubmitTransaction}>
        <FormGroup>
          <h5>Text</h5>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text.."
          />
        </FormGroup>
        <FormGroup>
          <h5>Amount (negative-expense, posistive-income)</h5>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount.."
          />
        </FormGroup>
        <button>Add transaction</button>
      </Form>
    </div>
  );
};
