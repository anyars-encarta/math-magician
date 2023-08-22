import './Calculator.css';

function Calculator() {
  return (
    <div className="main">
      <h1 className="header">Encarta Maths Magician</h1>
      <div className="calculator">
        <div className="cal-answer">0</div>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="side">/</button>

        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="side">X</button>

        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="side">-</button>

        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="side">+</button>

        <button type="button" className="zero">0</button>
        <button type="button">.</button>
        <button type="button" className="side">=</button>
      </div>
    </div>
  );
}

export default Calculator;
