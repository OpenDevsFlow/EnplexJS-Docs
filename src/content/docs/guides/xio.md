---
title: Xio
description: A powerful HTTP client for making requests with ease, supporting various HTTP methods, custom headers, timeouts, and retry mechanisms.
---

```js
const { Xio } = require('enplex.js');

(async () => {
  // Basic GET request
  const response = await Xio.request('https://api.github.com/users/bard');
  console.log(response); // Contains user information

  // POST request with custom headers and JSON body
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'New User', email: 'user@example.com' })
  };

  const postResponse = await Xio.request('https://example.com/api/users', options);
  console.log(postResponse); // Contains response data from the server

  // Request with timeout handling
  try {
    await Xio.request('https://slow.api.com', { timeout: 5000 }); // Adjust timeout as needed
  } catch (error) {
    console.error('Request timed out:', error.message);
  }

  // Request with automatic JSON parsing (if content-type is appropriate)
  const data = await Xio.request('https://example.com/data.json');
  console.log(data); // Contains parsed JSON data

  // Request with retry logic (up to 3 attempts with 1 second delay)
  try {
    await Xio.request('https://unreliable.api.com', { retry: { maxAttempts: 3, delay: 1000 } });
  } catch (error) {
    console.error('Request failed after retries:', error.message);
  }
})();
```