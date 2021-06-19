import { Money } from './Money';
import { Expression } from './Expression';

export class Sum implements Expression {
  augend!: Money;
  addend!: Money;

  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }
}
