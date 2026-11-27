import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { double } from '../src/e2e-b-r12e254.js';

test('double multiplies its argument by two', () => {
  equal(double(2), 4);
  equal(double(0), 0);
  equal(double(-4), -8);
});
