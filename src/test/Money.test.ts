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

  test('reduceメソッドに渡す引数がSumのテスト', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(sum, 'USD');
    expect(result).toEqual(Money.dollar(7));
  });

  test('reduceメソッドに渡す引数がMoneyのテスト', () => {
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(Money.dollar(1), 'USD');
    expect(result).toEqual(Money.dollar(1));
  });

  test('同じ通貨のときのレートは1で返ってくること', () => {
    expect(new Bank().rate('USD', 'USD')).toEqual(1);
  });

  test('異なる通貨のreduceのテスト', () => {
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result: Money = bank.reduce(Money.franc(2), 'USD');
    expect(result).toEqual(Money.dollar(1));
  });

  test('等価性比較のテスト', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    // 三角測量
    expect(Money.dollar(5).equals(Money.dollar(6))).not.toBeTruthy();

    // 比較
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  });

  test('通貨のテスト', () => {
    expect(Money.dollar(1).currency()).toBe('USD');
    expect(Money.franc(1).currency()).toBe('CHF');
  });

  test('異通貨の足し算テスト', () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result: Money = bank.reduce(fiveBucks.plus(tenFrancs), 'USD');
    expect(result).toEqual(Money.dollar(10));
  });

  test('Sumのplus()のテスト', () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const sum: Expression = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
    const result = bank.reduce(sum, 'USD');
    expect(result).toEqual(Money.dollar(15));
  });
});
