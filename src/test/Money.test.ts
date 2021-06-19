import { Money } from '../Money';
import { Bank } from '../Bank';
import { Expression } from '../Expression';
import { Sum } from '../Sum';

describe('Money', () => {
  test('掛け算のテスト', () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  test('シンプルな足し算', () => {
    const five: Money = Money.dollar(5);
    const sum = five.plus(five);
    const bank = new Bank();
    // reduced: 為替レートを適用することによって得られる換算結果
    const reduced = bank.reduce(sum, 'USD');
    expect(reduced).toEqual(Money.dollar(10));
  });

  test('plusメソッドははSumクラスのインスタンスを返すこと', () => {
    const five: Money = Money.dollar(5);
    const result: Expression = five.plus(five);
    const sum: Sum = result as Sum;
    expect(five).toEqual(sum.augend);
    expect(five).toEqual(sum.addend);
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
