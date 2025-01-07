---
title: Remove All Whitespace
description: Removes all whitespace from a string.
author: ItzIcyGaming
tags: string,whitespace
---

```js
function removeWhitespace(str) {
  return str.replace(/\s+/g, '');
}

// Usage:
removeWhitespace('Hello world!'); // Returns: 'Helloworld!'
```
