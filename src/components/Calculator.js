import React from 'react';
<<<<<<< HEAD
import calculate from '../logic/calculate';
=======
>>>>>>> b3312d4b9ab3776d0c0ad1c14cf71f5a4e288467

class Calculator extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
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
=======
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-grid">
        <div className="output">0</div>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button className="orange" type="button">&divide;</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button className="orange" type="button">&times;</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button className="orange" type="button">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button className="orange" type="button">+</button>
        <button className="span-two" type="button">0</button>
        <button type="button">.</button>
        <button className="orange" type="button">=</button>
>>>>>>> b3312d4b9ab3776d0c0ad1c14cf71f5a4e288467
      </div>
    );
  }
}

export default Calculator;
