import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const HistoryTable = styled.div`
  > h3 {
    padding-bottom: 5px;
    border-bottom: 1px solid black;
  }
`;

export const History = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(["satu", "dua", "tiga", "empat"]);
  }, []);

  return (
    <HistoryTable>
      <h3>History</h3>
      {item &&
        item.length > 0 &&
        item.map((i, id) => (
          <div key={id}>
            <button>X</button>
            <p>{i}</p>
          </div>
        ))}
    </HistoryTable>
  );
};
