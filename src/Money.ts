export class Money {
  protected amount!: number;

  equals(object: Money) {
    const money = object as Money;

    return (
      this.amount === money.amount &&
      // 書籍だとJavaのgetClassを使って評価
      this.constructor.name === money.constructor.name
    );
  }
}
