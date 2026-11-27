import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { decrement } from '../src/e2e-i2-r3928f2.js';

test('decrement subtracts one', () => {
  equal(decrement(5), 4);
  equal(decrement(0), -1);
});
