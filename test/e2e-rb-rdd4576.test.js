import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { quadruple } from '../src/e2e-rb-rdd4576.js';

test('quadruple multiplies its argument by four', () => {
  equal(quadruple(3), 12);
  equal(quadruple(0), 0);
  equal(quadruple(-2), -8);
});
