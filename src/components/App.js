import React from "react";
import { Balance } from "./Balance";
import { Header } from "./Header";
import { TransactionList } from "./TransactionList";
import { IncomeBalance } from "./IncomeExpense";
import { TransactionForm } from "./TransactionForm";
import { ContextProvider } from "../context/GlobalContext";

import styled from "@emotion/styled";
import imagePath from "../assets/background.jpg";

const AppContainer = styled.div`
  display: grid;
  background-color: rgb(235, 235, 235);
  place-items: center;
  width: 100vw;
  max-height: 100vh;
`;

const Container = styled.div`
  background-image: url(${imagePath});
  background-size: cover;
  width: 450px;
  max-height: 1000px;
  border-radius: 25px;
  padding: 25px;
  border: 1px dotted dodgerblue;
`;

const App = () => {
  return (
    <ContextProvider>
      <AppContainer>
        <Container>
          <Header />
          <Balance />
          <IncomeBalance />
          <TransactionList />
          <TransactionForm />
        </Container>
      </AppContainer>
    </ContextProvider>
  );
};

export default App;
