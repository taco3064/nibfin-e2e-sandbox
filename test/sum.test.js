import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { double, sum } from '../src/sum.js';

test('sum adds two numbers', () => {
  equal(sum(2, 3), 5);
});

test('double multiplies by two', () => {
  equal(double(4), 8);
  equal(double(-3), -6);
  equal(double(0), 0);
});
