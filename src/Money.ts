import { Expression } from './Expression';
import { Sum } from './Sum';
import { Bank } from './Bank';

export class Money implements Expression {
  protected _amount!: number;
  protected _currency!: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  times(multiplier: number): Money {
    return new Money(this._amount * multiplier, this._currency);
  }

  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: string): Money {
    const rate: number = bank.rate(this._currency, to);
    return new Money(this._amount / rate, to);
  }

  currency(): string {
    return this._currency;
  }

  equals(object: Money) {
    const money = object as Money;

    return (
      this._amount === money._amount &&
      // 書籍だとJavaのgetClassを使って評価
      this.currency() === money.currency()
    );
  }

  toString() {
    return `${this._amount} ${this._currency}`;
  }

  get amount(): number {
    return this._amount;
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }
}
