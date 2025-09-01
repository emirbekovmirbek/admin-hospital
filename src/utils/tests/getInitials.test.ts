import { describe, it, expect } from 'vitest';
import { getInitials } from 'utils/getInitials.ts';

describe('getInitial', () => {
  it('get empty', () => {
   const initial =  getInitials('');
    expect(initial).toMatch('');
  });
  it('get initial from fullName', () => {
    const initialOfName = getInitials('Test Testovic');
    expect(initialOfName).toMatch('TT');
  });
});
