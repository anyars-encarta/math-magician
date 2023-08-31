import calculate, { isNumber } from '../logic/calculate';

describe('calculate', () => {
  it('should clear the calculator data when AC button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should update the next number when a number button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '9');
    expect(result).toEqual({ total: '10', next: '59', operation: '+' });
  });

  it('should handle decimal point correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '.');
    expect(result).toEqual({ total: '10', next: '5.', operation: '+' });
  });

  it('should perform the operation when = button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(result).toEqual({ total: '15', next: null, operation: null });
  });

  it('should change the sign of the number when +/- button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '+/-');
    expect(result).toEqual({ total: '10', next: '-5', operation: '+' });
  });

  // Test case for the isNumber helper function
  it('should return true if the item is a number', () => {
    const result = isNumber('5');
    expect(result).toBe(true);
  });

  it('should return false if the item is not a number', () => {
    const result = isNumber('+');
    expect(result).toBe(false);
  });
});
