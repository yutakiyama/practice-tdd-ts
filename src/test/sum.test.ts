import { sum } from '../sum';

describe('sumは', () => {
  test('10と2を受け取ると3を返す', () => {
    expect(sum(10, 2)).toBe(12);
  });
});
