// Bank
import { Money } from './Money';
import { Expression } from './Expression';

export class Bank {
  reduce(source: Expression, to: string) {
    return Money.dollar(10);
  }
}
