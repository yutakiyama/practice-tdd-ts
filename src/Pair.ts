export class Pair {
  constructor(private from: string, private to: string) {}

  get value(): string {
    return `${this.from}:${this.to}`;
  }

  equals(key: Pair): boolean {
    return this.from === key.from && this.to === key.to;
  }
}

/*
export class Pair {
  constructor(private from: string, private to: string) {}

  public equals(object: any): boolean {
    const pair = object as Pair;
    return this.from === pair.from && this.to === pair.to;
  }

  public hashCode(): number {
    return 0;
  }
}
*/
