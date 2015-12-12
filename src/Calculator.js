export default class Calculator {
  constructor() {
    this.stack = [];
  }

  push(value) {
    let secondValue;
    let firstValue;

    if (value === "+") {
      secondValue = this.stack.pop();
      firstValue = this.stack.pop();

      value = firstValue + secondValue;
    }

    if (value === "-") {
      secondValue = this.stack.pop();
      firstValue = this.stack.pop();

      value = firstValue - secondValue;
    }

    if (value === "*") {
      secondValue = this.stack.pop();
      firstValue = this.stack.pop();

      value = firstValue * secondValue;
    }

    if (value === "/") {
      secondValue = this.stack.pop();
      firstValue = this.stack.pop();

      value = firstValue / secondValue;
    }

    this.stack.push(value);
  }
}
