import { describe, it, expect } from 'vitest';
import { add } from './index';

describe('index.ts', () => {
  describe('add', () => {
    it('Then adds the input values', () => {
      // Assert
      expect(add(1, 1)).toEqual(2);
    });
  });
});
