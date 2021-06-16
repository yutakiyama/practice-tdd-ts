import internal from 'stream';

export class Money {
  protected amount!: number;
  protected _currency!: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this._currency);
  }

  currency(): string {
    return this._currency;
  }

  equals(object: Money) {
    const money = object as Money;

    return (
      this.amount === money.amount &&
      // 書籍だとJavaのgetClassを使って評価
      this.currency() === money.currency()
    );
  }

  toString() {
    return `${this.amount} ${this._currency}`;
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }
}
