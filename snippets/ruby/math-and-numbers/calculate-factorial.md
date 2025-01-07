---
title: Calculate Factorial
description: Computes the factorial of a given integer.
author: ItzIcyGaming
tags: math,factorial
---

```rb
def factorial(n)
    return 1 if n <= 1
    (2..n).reduce(1, :*)
end

# Usage:
puts factorial(5) # Output: 120
```