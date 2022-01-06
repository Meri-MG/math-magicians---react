import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [value, setValue] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const btnName = e.target.innerText;
    const result = calculate(value, btnName);
    setValue(result);
  };
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="prevOperand">
          {value.total}
          {value.operation}
        </div>
        <div className="currOperand">{value.next}</div>
      </div>
      <button type="button" onClick={handleClick}>AC</button>
      <button type="button" onClick={handleClick}>+/-</button>
      <button type="button" onClick={handleClick}>%</button>
      <button className="orange" type="button" onClick={handleClick}>÷</button>
      <button type="button" onClick={handleClick}>7</button>
      <button type="button" onClick={handleClick}>8</button>
      <button type="button" onClick={handleClick}>9</button>
      <button className="orange" type="button" onClick={handleClick}>x</button>
      <button type="button" onClick={handleClick}>4</button>
      <button type="button" onClick={handleClick}>5</button>
      <button type="button" onClick={handleClick}>6</button>
      <button className="orange" type="button" onClick={handleClick}>-</button>
      <button type="button" onClick={handleClick}>1</button>
      <button type="button" onClick={handleClick}>2</button>
      <button type="button" onClick={handleClick}>3</button>
      <button className="orange" type="button" onClick={handleClick}>+</button>
      <button className="span-two" type="button" onClick={handleClick}>0</button>
      <button type="button" onClick={handleClick}>.</button>
      <button className="orange" type="button" onClick={handleClick}>=</button>
    </div>
  );
};

export default Calculator;
