---
title: Convert String to Param Case
description: Converts a given string into param-case.
author: ItzIcyGaming
tags: string,case,paramCase
---

```js
function toParamCase(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

// Usage:
toParamCase('Hello World Test'); // Returns: 'hello-world-test'
```
