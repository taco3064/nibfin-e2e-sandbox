import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { cube } from '../src/e2e-f-rda742f.js';

test('cube returns its argument cubed', () => {
  equal(cube(3), 27);
  equal(cube(-2), -8);
  equal(cube(0), 0);
});
