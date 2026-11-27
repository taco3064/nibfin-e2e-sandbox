import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { triple } from '../src/e2e-a-rd1d015.js';

test('triple returns its argument times three', () => {
  equal(triple(3), 9);
  equal(triple(-2), -6);
  equal(triple(0), 0);
});
