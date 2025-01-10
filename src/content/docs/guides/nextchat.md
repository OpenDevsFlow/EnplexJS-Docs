---
title: NextChat
description: Seamless integration with advanced AI models for generating text, images, and upscaling image.  Supports a wide range of models, including GPT-4, Claude, and various Llama models. No need for individual API keys.
---

## Text Chat & Code Generation:


```js
const { NextChat } = require('enplex.js');

(async () => {
  // Ask a question using llama-vision
  const answer = await NextChat.ask("What is the capital of France?", { model: "llama-vision" });
  console.log(answer);

  // Generate Rust code using Gemini
  const code = await NextChat.ask("Write a function to reverse a string in Rust", { model: "gemini" });
  console.log(code);
})();
```


## Image Generation:


```js
(async () => {
  // Generate an image with Prodia based on a prompt
  const image = await NextChat.imagine("A majestic cat sitting on a throne", { model: "prodia" });
  console.log(image);
})();
```

## Image Upscaling:


```js
(async () => {
  // Upscale an image from a URL
  const upscaleImage = await NextChat.upscale("https://example.com/low-res-image.jpg");
  console.log(upscaleImage);
})();
```

## Text-to-Speech (TTS):


```js
(async () => {
  // Convert text to speech
  const audio = await NextChat.tts("Hello, world! This is a test.");
  console.log(audio);
})();
```