import React from "react";
import { Balance } from "./Balance";
import { Header } from "./Header";
import { TransactionList } from "./TransactionList";
import { IncomeBalance } from "./IncomeExpense";
import { TransactionForm } from "./TransactionForm";

import styled from "@emotion/styled";
import imagePath from "../assets/background.jpg";

const AppContainer = styled.div`
  display: grid;
  background-color: rgb(235, 235, 235);
  place-items: center;
  width: 100vw;
  height: 100vh;

  > div {
    /* https://unsplash.com/photos/qqz06qPB_F0 */
    background-image: url(${imagePath});
    background-size: cover;
    width: 450px;
    max-height: 1000px;
    border-radius: 25px;
    padding: 25px;
    border: 1px dotted dodgerblue;
  }
`;

function App() {
  return (
    <AppContainer>
      <div>
        <Header />
        <Balance />
        <IncomeBalance />
        <TransactionList />
        <TransactionForm />
      </div>
    </AppContainer>
  );
}

export default App;
