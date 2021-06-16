import { Money, Dollar, Franc } from '../Money';

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

    // Franc
    expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
    expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();

    // 比較
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  });

  test('フランの掛け算テスト', () => {
    const five = Money.franc(5);
    expect(five.times(2)).toEqual(Money.franc(10));
    expect(five.times(3)).toEqual(Money.franc(15));
  });

  test('通貨のテスト', () => {
    const five = Money.franc(5);
    expect(five.times(2)).toEqual(Money.franc(10));
    expect(five.times(3)).toEqual(Money.franc(15));
  });
});
