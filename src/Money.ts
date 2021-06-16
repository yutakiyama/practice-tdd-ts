export class Money {
  protected amount!: number;

  equals(object: Money) {
    const money = object as Money;
    return this.amount === money.amount;
  }
}
