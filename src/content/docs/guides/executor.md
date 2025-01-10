---
title: Executor
description: Safely execute JavaScript code within your applications.
---

```js
const { Executor } = require('enplex.js');

// Evaluating a simple expression
const result = Executor.eval('2 + 3 * 4');
console.log(result); // Output: 14

// Creating a dynamic function
const addNumbers = Executor.fn('(a, b) => a + b');
const sum = addNumbers(5, 7);
console.log(sum); // Output: 12

// Unsafe Example (Avoid this):
// const userCode = "alert('Malicious code executed!');";
// Executor.eval(userCode); // This would execute the malicious code
```