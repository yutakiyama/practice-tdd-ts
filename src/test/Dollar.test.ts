import { Dollar } from '../Dollar';

describe('Dollar', () => {
  test('掛け算のテスト', () => {
    const five = new Dollar(5);
    let product = five.times(2);
    five.times(2);
    expect(product.amount).toEqual(10);
    product = five.times(3);
    expect(product.amount).toEqual(15);
  });

  test('等価性比較のテスト', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    // 三角測量
    expect(new Dollar(5).equals(new Dollar(6))).not.toBe(true);
  });
});
