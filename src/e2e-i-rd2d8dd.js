/** Returns n limited to the range lo..hi. */
export function clamp(n, lo, hi) {
  return Math.min(Math.max(n, lo), hi);
}
