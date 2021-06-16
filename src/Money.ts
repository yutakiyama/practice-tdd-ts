export abstract class Money {
  protected amount!: number;
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
    return new Dollar(amount);
  }

  static franc(amount: number): Franc {
    return new Franc(amount);
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }
}

export class Dollar extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
}
