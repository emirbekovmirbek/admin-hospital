import { describe, it, expect } from 'vitest';
import { getAgeWithLabel } from 'utils/getAgeWithLabel.ts';

describe('getInitial', () => {
  it('get empty', () => {
    const initial =  getAgeWithLabel('');
    expect(initial).toMatch('');
  });
  it('get лет', () => {
    const age = getAgeWithLabel('08.20.2012');
    expect(age).toMatch('13 лет');
  });
  it('get год', () => {
    const age = getAgeWithLabel('08.20.2024');
    expect(age).toMatch('1 год');
  });
  it('get года', () => {
    const age = getAgeWithLabel('08.20.2022');
    expect(age).toMatch('3 года');
  });
});
