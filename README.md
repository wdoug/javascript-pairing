# Javascript Pairing Interview

### Setup

```
git clone https://github.com/wbeard/javascript-pairing
cd javascript-pairing
npm i
npm run test:watch
```

This will clone the repo, move you into the project directory, install the dependencies and start watching your code and running tests in the background.

Choose from an exercise below to get started.

### Exercise 1
Implement a Reverse Polish Notation Calculator.

Reverse Polish Notation avoids any kind of confusion with order of operations by placing operators after their operands. You can experiment with using an RPN calculator by opening the OSX calculator app and selecting `View->RPN Mode`. More information here: http://en.wikipedia.org/wiki/Reverse_Polish_notation

For example:
```
> 5 6 +
11

> 5 6 -
-1

> 5 6 *
30
```

Multiple operations can be chained together. For example, add 4 to the result:
```
> 5 6 * 4 +
34
```

Create a calculator class to compute rpn arithmetic:
```
> var calculator = new Calculator();
> calculator.push(5);
> calculator.push(6);
> calculator.push("*");
> calculator.push(4);
> calculator.push("+");
> calculator.result();

34
```

An operator applies only to the previous 2 values and leaves other values unchanged:
```
> 7 8 9 +
7 17

> 1 2 3 4 5 +
1 2 3 9
```

Multiple operators can be entered in sequence.
```
>2 3 4 * * 5 +

29
```

How can the calculator be extended to accept arbitrary operator functions?

How would the user enter input into the calculator from the browser?
