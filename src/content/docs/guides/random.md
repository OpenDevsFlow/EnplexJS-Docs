---
title: Random
description: Access to a variety of random content, including cat facts, dog facts, quotes, and anime-related images.
---

```js
const { Random } = require('enplex.js');

(async () => {
  // Get a random cat fact
  const catFact = await Random.catfact();
  console.log(catFact);

  // Get a random dog fact
  const dogFact = await Random.dogfact();
  console.log(dogFact);

  // Get a random quote
  const quote = await Random.quote();
  console.log(quote);

  // Get a random joke
  const joke = await Random.joke();
  console.log(joke);

  // Get a random waifu info
  const waifu = await Random.waifu();
  console.log(waifu);

  // Get a waifu picture by name (if supported by the API)
  try {
    const waifuPic = await Random.waifupic("Rem"); // Replace with desired waifu name
    console.log(waifuPic); // May contain a URL or data for the picture
  } catch (error) {
    console.error("Error fetching waifu picture:", error.message);
  }
})();
```