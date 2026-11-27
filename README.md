# nibfin-e2e-sandbox

This is an automated test sandbox for Nibfin e2e, not a real project. The
nibfin-e2e harness resets it to this content before every gate run and deletes
everything a run created afterwards. Do not keep anything here.

## clamp

`clamp(n, lo, hi)` from `src/e2e-i-rda742f.js` returns `n` limited to the range
`lo`..`hi`. For example, `clamp(15, 0, 10)` returns `10`.
