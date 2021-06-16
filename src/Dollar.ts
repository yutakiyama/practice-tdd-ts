export class Dollar {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  equals(object: Dollar) {
    const dollar: Dollar = object;
    return this.amount === dollar.amount;
  }
}
