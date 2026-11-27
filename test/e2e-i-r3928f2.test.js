import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { clamp } from '../src/e2e-i-r3928f2.js';

test('clamp returns lo for a value below the range', () => {
  equal(clamp(-5, 0, 10), 0);
});

test('clamp returns n unchanged inside the range', () => {
  equal(clamp(5, 0, 10), 5);
});

test('clamp returns hi for a value above the range', () => {
  equal(clamp(15, 0, 10), 10);
});

test('clamp returns the bound for a value exactly at it', () => {
  equal(clamp(0, 0, 10), 0);
  equal(clamp(10, 0, 10), 10);
});
