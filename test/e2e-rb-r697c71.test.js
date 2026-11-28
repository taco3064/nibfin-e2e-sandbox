import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { quadruple } from '../src/e2e-rb-r697c71.js';

test('quadruple returns its argument times four', () => {
  equal(quadruple(3), 12);
});
