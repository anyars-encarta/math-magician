import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

// Test the Calculator component using Jest snapshots
describe('Calculator', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// Test user interactions using React Testing Library
describe('Calculator interactions', () => {
  it('should handle button clicks correctly', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const answerDisplay = getByTestId('calc-answer');

    // Simulate button clicks
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));

    // Check if the answer is displayed correctly
    expect(answerDisplay.textContent).toBe('10');
  });
});
