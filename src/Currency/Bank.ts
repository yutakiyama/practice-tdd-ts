// Bank
import { Money } from './Money';
import { Expression } from './Expression';
import { Pair } from './Pair';

export class Bank {
  /** 為替レートを管理するマップ */
  private rateMap = new Map<string, number>();

  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number): void {
    const key = new Pair(from, to).value;
    this.rateMap.set(key, rate);
  }

  rate(from: string, to: string): number {
    if (from === to) {
      return 1;
    }
    const key = new Pair(from, to).value;
    const rate = this.rateMap.get(key);
    if (rate === undefined) {
      throw new Error();
    }
    return rate;
  }
}
