import { Money } from '../Money';

describe('Money', () => {
  test('掛け算のテスト', () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  test('等価性比較のテスト', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    // 三角測量
    expect(Money.dollar(5).equals(Money.dollar(6))).not.toBeTruthy();

    // 比較
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  });

  test('通貨のテスト', () => {
    const five = Money.franc(5);
    expect(Money.dollar(1).currency()).toBe('USD');
    expect(Money.franc(1).currency()).toBe('CHF');
  });
});
