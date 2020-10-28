import React, { useEffect, useState } from "react";

export const History = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(["satu", "dua", "tiga", "empat"]);
  }, []);

  return (
    <div className="History">
      <h4>History</h4>
      {item &&
        item.length > 0 &&
        item.map((i) => (
          <div>
            <button>X</button>
            <p>{i}</p>
          </div>
        ))}
    </div>
  );
};
