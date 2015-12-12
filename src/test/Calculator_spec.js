import { expect } from 'chai';

import Calculator from '../Calculator';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('exists', () => {
    expect(Calculator).to.not.be.undefined;
  });

  it('can create an instance', () => {
    expect(calculator).to.not.be.undefined;
  });

  describe('#push', () => {
    it('exists', () => {
      expect(calculator.push).to.not.be.undefined;
    });

    it('pushes a value onto the stack', () => {
      calculator.push(3);
      expect(calculator.stack[0]).to.equal(3);
    });

    it('push can handle multiple values', () => {
      calculator.push(3);
      calculator.push(4);
      expect(calculator.stack[0]).to.equal(3);
      expect(calculator.stack[1]).to.equal(4);
    });

    describe('when we push an operator', () => {
      it('can add two numbers', () => {
        calculator.push(3);
        calculator.push(4);
        calculator.push("+");
        expect(calculator.stack[0]).to.equal(7);
        expect(calculator.stack.length).to.equal(1);
      });

      it('can subtract two numbers', () => {
        calculator.push(4);
        calculator.push(3);
        calculator.push("-");
        expect(calculator.stack[0]).to.equal(1);
        expect(calculator.stack.length).to.equal(1);
      });

      it('can multiply two numbers', () => {
        calculator.push(3);
        calculator.push(4);
        calculator.push("*");
        expect(calculator.stack[0]).to.equal(12);
        expect(calculator.stack.length).to.equal(1);
      });

      it('can divide two numbers', () => {
        calculator.push(12);
        calculator.push(4);
        calculator.push("/");
        expect(calculator.stack[0]).to.equal(3);
        expect(calculator.stack.length).to.equal(1);
      });
    });
  });
});
