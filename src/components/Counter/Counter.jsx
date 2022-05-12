import React, { useState } from "react";
import "./Counter.scss";

const Counter = ({ employee }) => {
  const [currentCounter, setCurrentCounter] = useState(employee.count);

  const handleDecrement = () => {
    if (currentCounter > 0) {
      let newCounter = currentCounter - 1;
      setCurrentCounter(newCounter);
    }
  };

  const handleIncrement = () => {
    let newCounter = currentCounter + 1;
    setCurrentCounter(newCounter);
  };

  return (
    <div className="CounterBox">
      <h3 className="Count">Counter</h3>
      {currentCounter}
      <br />
      <div className="ButtonContainer">
        <button className="CounterBox__button" type="button" onClick={handleDecrement}>
          -
        </button>
        <button className="CounterBox__button" type="button" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
