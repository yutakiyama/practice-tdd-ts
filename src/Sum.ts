import { Money } from './Money';
import { Expression } from './Expression';
import { Bank } from './Bank';

export class Sum implements Expression {
  constructor(public augend: Expression, public addend: Expression) {}

  plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: string): Money {
    const amount: number =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }
}
