import assert from 'assert';

class TestCase {
  name!: string;
  constructor(name: string) {
    this.name = name;
  }

  run() {
    console.log('this.name');
    console.log(this.name);
    const method = `this.${this.name}()`;
    eval(method); // eval
  }
}

class WasRun extends TestCase {
  wasRun?: number;

  constructor(name: string) {
    super(name);
    this.wasRun = undefined;
  }

  testMethod() {
    this.wasRun = 1;
  }
}

class TestCaseTest extends TestCase {
  testRunning() {
    const test = new WasRun('testMethod');
    assert(test.wasRun === undefined);
    test.run();
    assert(test.wasRun);
  }
}

const testCaseTest = new TestCaseTest('testRunning');
testCaseTest.run();
