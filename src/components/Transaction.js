import React from "react";
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
export const Transaction = () => {
  return (
    <div>
      <h4>Add new transaction</h4>
      <Form>
        <FormGroup>
          <h5>Text</h5>
          <input type="text" placeholder="Enter text.." />
        </FormGroup>
        <FormGroup>
          <h5>Amount (negative-expense, posistive-income)</h5>
          <input type="number" placeholder="Enter amount.." />
        </FormGroup>
        <button type="submit">Add transaction</button>
      </Form>
    </div>
  );
};
