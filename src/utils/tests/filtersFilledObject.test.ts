import { describe, it, expect } from 'vitest';
import { filtersFilledObject } from 'utils/filtersFilledObject';

describe('filtersFilledObject', () => {
  it('filters object', () => {
    const user = {
      firstName: 'Test',
      patronymic: undefined
    };

    expect(filtersFilledObject(user)).toEqual({
      firstName: 'Test',
    });
  });
  it('drops empty string (including whitespace-only)', () => {
    const input = { a: '', b: '   ', c: ' ok ' };
    expect(filtersFilledObject(input)).toEqual({ c: ' ok ' });
  });
  it('drops empty plain object {}', () => {
    const input = { a: {}, b: { x: 1 } };
    expect(filtersFilledObject(input)).toEqual({ b: { x: 1 } });
  });
});
