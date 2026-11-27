import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { sum } from '../src/sum.js';

test('sum adds two numbers', () => {
  equal(sum(5, 3), 2);
});
