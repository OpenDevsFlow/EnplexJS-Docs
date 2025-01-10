---
title: Import
description: Import ES modules in CommonJS files. Import CommonJS modules in ESM files.
---

```js
const { Import } = require('enplex.js');

async function main() {
  try {
    // Import a module dynamically
    var enplex = await Import('enplex.js/esm');

    const result = await enplex.NextChat.ask("hello, how are you?", { model: "gemini" });
    console.log(result);
  } catch (error) {
    console.error('Error importing module:', error);
  }
}

main();
```