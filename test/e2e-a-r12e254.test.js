import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { triple } from '../src/e2e-a-r12e254.js';

test('triple multiplies its argument by three', () => {
  equal(triple(2), 6);
  equal(triple(0), 0);
  equal(triple(-4), -12);
});
