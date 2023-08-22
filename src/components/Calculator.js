import React from 'react';
import CalculatorButton from './CalculatorButton';
import './Calculator.css';

function Calculator() {
  return (
    <div className="main">
      <h1 className="header">Encarta Maths Magician</h1>
      <div className="calculator">
        <div className="cal-answer">0</div>
        <CalculatorButton>AC</CalculatorButton>
        <CalculatorButton>+/-</CalculatorButton>
        <CalculatorButton>%</CalculatorButton>
        <CalculatorButton className="side">/</CalculatorButton>

        <CalculatorButton>7</CalculatorButton>
        <CalculatorButton>8</CalculatorButton>
        <CalculatorButton>9</CalculatorButton>
        <CalculatorButton className="side">X</CalculatorButton>

        <CalculatorButton>4</CalculatorButton>
        <CalculatorButton>5</CalculatorButton>
        <CalculatorButton>6</CalculatorButton>
        <CalculatorButton className="side">-</CalculatorButton>

        <CalculatorButton>1</CalculatorButton>
        <CalculatorButton>2</CalculatorButton>
        <CalculatorButton>3</CalculatorButton>
        <CalculatorButton className="side">+</CalculatorButton>

        <CalculatorButton className="zero">0</CalculatorButton>
        <CalculatorButton>.</CalculatorButton>
        <CalculatorButton className="side">=</CalculatorButton>
      </div>
    </div>
  );
}

export default Calculator;
