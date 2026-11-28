# nibfin-e2e-sandbox

This is an automated test sandbox for Nibfin e2e, not a real project. The
nibfin-e2e harness resets it to this content before every gate run and deletes
everything a run created afterwards. Do not keep anything here.

## clamp

`src/e2e-i-r697c71.js` exports `clamp(n, lo, hi)`, which returns `n` limited to
the range `lo`..`hi`.

```js
import { clamp } from './src/e2e-i-r697c71.js';

clamp(15, 0, 10); // 10
```
