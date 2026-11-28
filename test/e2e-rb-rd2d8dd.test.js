import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { quadruple } from '../src/e2e-rb-rd2d8dd.js';

test('quadruple multiplies its argument by four', () => {
  equal(quadruple(3), 12);
});
