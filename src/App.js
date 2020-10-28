import React from "react";
import "./App.css";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { History } from "./components/History";
import { IncomeBalance } from "./components/IncomeExpense";

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Header />
        <Balance />
        <IncomeBalance />
        <History />
      </div>
    </div>
  );
}

export default App;
