import { cleanup } from '@testing-library/react';
import calculate from '../../logic/calculate';

afterEach(cleanup);

describe('check the math operations', () => {
  it('addition', () => {
    const objOfOperands = { total: 20, next: 10, operation: '+' };
    const result = calculate(objOfOperands, objOfOperands.operation);
    expect(result.total).toBe('30');
  });

  it('division', () => {
    const objOfOperands = { total: 20, next: 10, operation: '÷' };
    const result = calculate(objOfOperands, objOfOperands.operation);
    expect(result.total).toBe('2');
  });

  it('multiplication', () => {
    const objOfOperands = { total: 20, next: 10, operation: 'x' };
    const result = calculate(objOfOperands, objOfOperands.operation);
    expect(result.total).toBe('200');
  });

  it('subtraction', () => {
    const objOfOperands = { total: 20, next: 10, operation: '-' };
    const result = calculate(objOfOperands, objOfOperands.operation);
    expect(result.total).toBe('10');
  });
});
