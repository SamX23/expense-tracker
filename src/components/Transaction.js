import React from "react";

export const Transaction = () => {
  return (
    <div>
      <h4>Add new trancsaction</h4>
      <form>
        <label>Text</label>
        <input placeholder="Enter text.." />
        <label>Amount</label>
        <label>(negative-expense, posistive-income)</label>
        <input placeholder="Enter amount.." />
        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
};
