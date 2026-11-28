import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { square } from '../src/e2e-m2-r11cd60.js';

test('square returns its argument squared', () => {
  equal(square(3), 9);
  equal(square(-4), 16);
  equal(square(0), 0);
});
