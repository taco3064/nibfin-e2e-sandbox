import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { clamp } from '../src/e2e-i-r12e254.js';

test('clamp leaves a value inside the range unchanged', () => {
  equal(clamp(5, 0, 10), 5);
});

test('clamp raises a value below the range to lo', () => {
  equal(clamp(-3, 0, 10), 0);
});

test('clamp lowers a value above the range to hi', () => {
  equal(clamp(42, 0, 10), 10);
});

test('clamp keeps boundary values', () => {
  equal(clamp(0, 0, 10), 0);
  equal(clamp(10, 0, 10), 10);
});
