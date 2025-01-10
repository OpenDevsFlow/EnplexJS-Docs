---
title: Discord Webhook
description: Send customized Discord webhook messages with embeds and attachments.
---

```js
const { NextChat, DiscordWebhook } = require('enplex.js');

(async () => {
  // Replace with your Discord webhook details
  const webhook = new DiscordWebhook({
    id: "YOUR_WEBHOOK_ID",
    token: "YOUR_WEBHOOK_TOKEN",
  });

  // Text Chat Example
  const answer = await NextChat.ask("What is the meaning of life?", { model: "gpt4o" });
  const embed = await DiscordWebhook.createEmbed({
    title: "Question for GPT-4o",
    description: answer,
    color: 0x0099FF, // Optional: Set embed color
    timestamp: new Date(), // Optional: Add a timestamp
    footer: {
      text: "Powered by NextChat",
      icon_url: "https://example.com/icon.png" // Optional: Add an icon
    },
    thumbnail: {
      url: "https://example.com/thumbnail.jpg" // Optional: Add a thumbnail
    },
    author: {
      name: "NextChat Bot",
      icon_url: "https://example.com/bot_avatar.png" // Optional: Add an icon
    },
    fields: [
      {
        name: "Question",
        value: "What is the meaning of life?",
        inline: true
      },
      {
        name: "Answer",
        value: answer,
        inline: true
      }
    ]
  });

  await webhook.send(embed);
})();
```