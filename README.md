# nibfin-e2e-sandbox

This is an automated test sandbox for Nibfin e2e, not a real project. The
nibfin-e2e harness resets it to this content before every gate run and deletes
everything a run created afterwards. Do not keep anything here.

## clamp

`src/e2e-i-r76295a.js` exports `clamp(n, lo, hi)`, which returns `n` limited to
the range `lo`..`hi`.

```js
clamp(42, 0, 10); // 10
```
