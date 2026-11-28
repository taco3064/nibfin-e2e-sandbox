import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { negate } from '../src/e2e-c-r68b5f2.js';

test('negate returns its argument negated', () => {
  equal(negate(4), -4);
  equal(negate(-3), 3);
});
