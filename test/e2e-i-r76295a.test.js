import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { clamp } from '../src/e2e-i-r76295a.js';

test('clamp returns a value inside the range unchanged', () => {
  equal(clamp(5, 0, 10), 5);
});

test('clamp returns lo for a value below the range', () => {
  equal(clamp(-3, 0, 10), 0);
});

test('clamp returns hi for a value above the range', () => {
  equal(clamp(42, 0, 10), 10);
});

test('clamp keeps the boundaries', () => {
  equal(clamp(0, 0, 10), 0);
  equal(clamp(10, 0, 10), 10);
});
