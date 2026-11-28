import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { negate } from '../src/e2e-c-r697c71.js';

test('negate returns its argument negated', () => {
  equal(negate(2), -2);
  equal(negate(-3), 3);
  equal(Object.is(negate(0), -0), true);
});
