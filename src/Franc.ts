export class Franc {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  equals(object: Franc) {
    const dollar: Franc = object;
    return this.amount === dollar.amount;
  }
}
