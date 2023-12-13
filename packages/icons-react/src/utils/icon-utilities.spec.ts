import { themedefault } from '@keisha/design-system-tokens';
import { getSize, isValidColor } from './icon-utilities';

describe('Icon utilities unit tests', () => {
  it('getSize() should return the correct number value for xs', () => {
    const val = getSize('xs');
    expect(val).toBe(12);
  });

  it('isValidColor() should return false if invalid color is passed in', () => {
    const val = isValidColor('salmon');
    expect(val).toBe(false);
  });

  it('isValidColor() should return true when a valid color is passed in', () => {
    const val = isValidColor(themedefault.SemanticBorderInteractiveXstrong);
    expect(val).toBe(true);
  });
});
