---
title: Remove Element
description: Removes a specified element from the DOM.
author: ItzIcyGaming
tags: dom,remove
---

```js
const removeElement = (element) => {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};

// Usage:
const element = document.querySelector('.my-element');
removeElement(element);
```
