import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { double } from '../src/e2e-b-r241ca4.js';

test('double multiplies a number by two', () => {
  equal(double(2), 4);
  equal(double(0), 0);
  equal(double(-3), -6);
});
