import { cleanup } from '@testing-library/react';
import operate from '../../logic/operate';

afterEach(cleanup);

describe('check the math operands', () => {
  it('addition', () => {
    expect(operate(8, 5, '+')).toBe('13');
  });

  it('subtraction', () => {
    expect(operate(57, 5, '-')).toBe('52');
  });

  it('multiplication', () => {
    expect(operate(5, 5, 'x')).toBe('25');
    expect(operate(5, 5, 'x')).toEqual('25');
  });

  it('division', () => {
    expect(operate(55, 5, '÷')).toBe('11');
  });

  it('modulus', () => {
    expect(operate(23, 7, '%')).toBe('2');
  });
});
