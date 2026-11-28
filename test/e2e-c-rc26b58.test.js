import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { negate } from '../src/e2e-c-rc26b58.js';

test('negate returns its argument negated', () => {
  equal(negate(3), -3);
  equal(negate(-2), 2);
  equal(negate(0), -0);
});
