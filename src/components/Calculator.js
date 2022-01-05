import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const result = calculate(this.state, e.target.innerText);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-grid">
        <div className="output">
          <div className="prevOperand">
            {total}
            {operation}
          </div>
          <div className="currOperand">{next}</div>
        </div>
        <button type="button" onClick={this.handleClick}>AC</button>
        <button type="button" onClick={this.handleClick}>+/-</button>
        <button type="button" onClick={this.handleClick}>%</button>
        <button className="orange" type="button" onClick={this.handleClick}>÷</button>
        <button type="button" onClick={this.handleClick}>7</button>
        <button type="button" onClick={this.handleClick}>8</button>
        <button type="button" onClick={this.handleClick}>9</button>
        <button className="orange" type="button" onClick={this.handleClick}>x</button>
        <button type="button" onClick={this.handleClick}>4</button>
        <button type="button" onClick={this.handleClick}>5</button>
        <button type="button" onClick={this.handleClick}>6</button>
        <button className="orange" type="button" onClick={this.handleClick}>-</button>
        <button type="button" onClick={this.handleClick}>1</button>
        <button type="button" onClick={this.handleClick}>2</button>
        <button type="button" onClick={this.handleClick}>3</button>
        <button className="orange" type="button" onClick={this.handleClick}>+</button>
        <button className="span-two" type="button" onClick={this.handleClick}>0</button>
        <button type="button" onClick={this.handleClick}>.</button>
        <button className="orange" type="button" onClick={this.handleClick}>=</button>
      </div>
    );
  }
}

export default Calculator;
