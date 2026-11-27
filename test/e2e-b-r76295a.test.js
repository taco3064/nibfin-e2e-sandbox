import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { double } from '../src/e2e-b-r76295a.js';

test('double returns its argument times two', () => {
  equal(double(2), 4);
  equal(double(0), 0);
  equal(double(-3), -6);
});
