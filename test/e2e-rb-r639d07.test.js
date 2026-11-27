import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { quadruple } from '../src/e2e-rb-r639d07.js';

test('quadruple multiplies by four', () => {
  equal(quadruple(3), 12);
  equal(quadruple(0), 0);
  equal(quadruple(-2), -8);
});
