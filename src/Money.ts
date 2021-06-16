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

  static dollar(amount: number): Dollar {
    return new Dollar(amount, 'USD');
  }

  static franc(amount: number): Franc {
    return new Franc(amount, 'CHF');
  }
}

//  Franc
export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}

// Dollar
export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}
