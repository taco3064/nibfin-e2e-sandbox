import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { square } from '../src/e2e-x-r639d07.js';

test('square returns its argument squared', () => {
  equal(square(3), 9);
  equal(square(0), 0);
  equal(square(-4), 16);
});
