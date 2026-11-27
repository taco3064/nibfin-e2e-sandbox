import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { negate } from '../src/e2e-rc-r76295a.js';

test('negate returns its argument negated', () => {
  equal(negate(5), -5);
  equal(negate(-3), 3);
});
