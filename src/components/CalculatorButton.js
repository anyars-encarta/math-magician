import React from 'react';
import PropTypes from 'prop-types';

function CalculatorButton({ children, onClick, className }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

CalculatorButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

CalculatorButton.defaultProps = {
  className: '',
};

export default CalculatorButton;
