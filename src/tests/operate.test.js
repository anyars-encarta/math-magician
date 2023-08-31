import operate from '../logic/operate';

describe('operate', () => {
  it('should add two numbers correctly', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  it('should subtract two numbers correctly', () => {
    expect(operate(5, 2, '-')).toBe('3');
  });

  it('should multiply two numbers correctly', () => {
    expect(operate(4, 2, 'x')).toBe('8');
  });

  it('should divide two numbers correctly', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });

  it('should handle division by zero', () => {
    expect(operate(5, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('should calculate modulo correctly', () => {
    expect(operate(7, 3, '%')).toBe('1');
  });

  it('should handle modulo when dividing by zero', () => {
    expect(operate(5, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operation', () => {
    expect(() => operate(2, 3, '$')).toThrow("Unknown operation '$'");
  });
});
