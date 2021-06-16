export class Money {
  protected amount!: number;

  equals(object: any) {
    const money = object as Money;
    return this.amount === money.amount;
  }
}
