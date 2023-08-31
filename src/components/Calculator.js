import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import calculate from '../logic/calculate';
import '../modules/Calculator.css';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  return (
    <div className="main">
      <h1 className="header">Calculator</h1>
      <div className="calcSection">
        <h2>Let&apos;s do some math!</h2>
        <div className="calculator">
          <div className="cal-answer" data-testid="calc-answer">
            {calculatorData.next || calculatorData.total || '0'}
          </div>
          <CalculatorButton onClick={() => handleClick('AC')}>AC</CalculatorButton>
          <CalculatorButton onClick={() => handleClick('+/-')}>+/-</CalculatorButton>
          <CalculatorButton onClick={() => handleClick('%')}>%</CalculatorButton>
          <CalculatorButton className="side" onClick={() => handleClick('÷')}>/</CalculatorButton>

          <CalculatorButton onClick={() => handleClick('7')}>7</CalculatorButton>
          <CalculatorButton onClick={() => handleClick('8')}>8</CalculatorButton>
          <CalculatorButton onClick={() => handleClick('9')}>9</CalculatorButton>
          <CalculatorButton className="side" onClick={() => handleClick('x')}>X</CalculatorButton>

          <CalculatorButton onClick={() => handleClick('4')}>4</CalculatorButton>
          <CalculatorButton onClick={() => handleClick('5')}>5</CalculatorButton>
          <CalculatorButton onClick={() => handleClick('6')}>6</CalculatorButton>
          <CalculatorButton className="side" onClick={() => handleClick('-')}>-</CalculatorButton>

          <CalculatorButton onClick={() => handleClick('1')}>1</CalculatorButton>
          <CalculatorButton onClick={() => handleClick('2')}>2</CalculatorButton>
          <CalculatorButton onClick={() => handleClick('3')}>3</CalculatorButton>
          <CalculatorButton className="side" onClick={() => handleClick('+')}>+</CalculatorButton>

          <CalculatorButton className="zero" onClick={() => handleClick('0')}>0</CalculatorButton>
          <CalculatorButton onClick={() => handleClick('.')}>.</CalculatorButton>
          <CalculatorButton className="side" onClick={() => handleClick('=')}>=</CalculatorButton>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
