# nibfin-e2e-sandbox

This is an automated test sandbox for Nibfin e2e, not a real project. The
nibfin-e2e harness resets it to this content before every gate run and deletes
everything a run created afterwards. Do not keep anything here.

## clamp

`clamp(n, lo, hi)`, exported from `src/e2e-i-r11cd60.js`, returns `n` limited
to the range `lo`..`hi`: `lo` when `n` is below it, `hi` when `n` is above it,
and `n` unchanged otherwise.
