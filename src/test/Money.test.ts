import { Dollar } from '../Dollar';
import { Franc } from '../Franc';

describe('Dollar', () => {
  test('掛け算のテスト', () => {
    const five = new Dollar(5);
    expect(five.times(2)).toEqual(new Dollar(10));
    expect(five.times(3)).toEqual(new Dollar(15));
  });

  test('等価性比較のテスト', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    // 三角測量
    expect(new Dollar(5).equals(new Dollar(6))).not.toBe(true);
  });

  test('フランの掛け算テスト', () => {
    const five = new Franc(5);
    expect(five.times(2)).toEqual(new Franc(10));
    expect(five.times(3)).toEqual(new Franc(15));
  });

  test('フランの等価性比較のテスト', () => {
    expect(new Franc(5).equals(new Franc(5))).toBe(true);
    // 三角測量
    expect(new Franc(5).equals(new Franc(6))).not.toBe(true);
  });
});
