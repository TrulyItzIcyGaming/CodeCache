---
title: Check if String is a Palindrome
description: Checks whether a given string is a palindrome.
author: ItzIcyGaming
tags: check,palindrome,string
---

```js
function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage:
isPalindrome('A man, a plan, a canal, Panama'); // Returns: true
```
