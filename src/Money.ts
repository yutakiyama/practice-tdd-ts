export abstract class Money {
  protected amount!: number;
  protected currency!: string;
  abstract times(multiplier: number): Money;

  constructor() {}

  equals(object: Money) {
    const money = object as Money;

    return (
      this.amount === money.amount &&
      // 書籍だとJavaのgetClassを使って評価
      this.constructor.name === money.constructor.name
    );
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
    super();
    this.amount = amount;
    this.currency = currency;
  }

  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}

// Dollar
export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super();
    this.amount = amount;
    this.currency = currency;
  }

  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}
