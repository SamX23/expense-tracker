import React, { useState } from "react";

export const IncomeBalance = () => {
  const [income, setIncome] = useState();
  const [outcome, setOutcome] = useState();

  return (
    <div className="Balance__table">
      <div className="Balance__income">
        <h4>Income</h4>
        <p className="Income__result">{"$0.00" || income}</p>
      </div>
      <div className="Balance__outcome">
        <h4>Outcome</h4>
        <p className="Outcome__result">{"$0.00" || outcome}</p>
      </div>
    </div>
  );
};
