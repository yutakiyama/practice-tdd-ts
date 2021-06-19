import { Expression } from './Expression';

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
    return new Money(this._amount + addend._amount, this._currency);
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

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }
}
