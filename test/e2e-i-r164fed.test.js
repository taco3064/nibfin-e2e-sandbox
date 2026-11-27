import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { clamp } from '../src/e2e-i-r164fed.js';

test('clamp returns lo for a value below the range', () => {
  equal(clamp(-5, 0, 10), 0);
});

test('clamp returns hi for a value above the range', () => {
  equal(clamp(15, 0, 10), 10);
});

test('clamp returns n for a value inside the range', () => {
  equal(clamp(7, 0, 10), 7);
});

test('clamp returns the bound for a value on either bound', () => {
  equal(clamp(0, 0, 10), 0);
  equal(clamp(10, 0, 10), 10);
});
