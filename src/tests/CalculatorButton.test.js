import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CalculatorButton from '../components/CalculatorButton';

describe('CalculatorButton', () => {
  test('renders correctly', () => {
    const { container } = render(
      <CalculatorButton onClick={() => {}}>
        Test Button
      </CalculatorButton>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('calls onClick callback when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <CalculatorButton onClick={onClickMock}>
        Test Button
      </CalculatorButton>,
    );
    fireEvent.click(getByText('Test Button'));
    expect(onClickMock).toHaveBeenCalled();
  });
});
