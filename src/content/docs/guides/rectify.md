---
title: Rectify
description: A minimalist framework for building web applications inspired by Express.js. Features include routing, middleware, error handling, and static file serving.
---

```js
const { Rectify } = require('enplex.js');

const app = new Rectify();

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.url}`);
  next();
});

// Route to handle GET requests to the root path
app.route('GET', '/', (req, res) => {
  res.send('Hello, World!');
});

// Route to handle GET requests to the '/users/:id' path
app.route('GET', '/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Error handler
app.useErrorHandler((error, req, res) => {
  console.error(error);
  res.setStatus(500);
  res.send('Internal Server Error');
});

// Not found handler
app.useNotFoundHandler((req, res) => {
  res.setStatus(404);
  res.send('Not Found');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```