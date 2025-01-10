---
title: Search
description: Effortless searching across popular platforms like YouTube, Spotify, and GitHub.
---

```js
const { Search } = require('enplex.js');

(async () => {
  // YouTube Search
  const videos = await Search.yt("funny cat videos");
  console.log(videos); // Will contain an array of video information

  // GitHub Repository Search
  const repos = await Search.github("javascript libraries");
  console.log(repos); // Will contain an array of repository information

  // Pinterest Search (limited to 3 results)
  const pins = await Search.pin("DIY projects");
  console.log(pins); // Will contain an array of pin information

  // Pexels Image Search (limited to 3 results)
  const images = await Search.pexels("nature photography");
  console.log(images); // Will contain an array of image information

  // Wallpaper Search (limited to 3 results)
  const wallpapers = await Search.wallpaper("fantasy landscapes");
  console.log(wallpapers); // Will contain an array of wallpaper information

  // Anime Wallpaper Search (limited to 3 results)
  const animeWallpapers = await Search.animeWallpaper("action anime");
  console.log(animeWallpapers); // Will contain an array of anime wallpaper information
})();
```