import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { triple } from '../src/e2e-p-r76295a.js';

test('triple multiplies its argument by three', () => {
  equal(triple(2), 6);
  equal(triple(0), 0);
  equal(triple(-4), -12);
});
