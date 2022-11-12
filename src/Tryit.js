import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function Tryit() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count
    );
  }, [count]); // <- add the count variable here

  return (
    <>
      
      <button onClick={() => setCount((c) => c+1)}>+</button>
      <p>Attempts: {calculation}</p>
    </>
  );
}

