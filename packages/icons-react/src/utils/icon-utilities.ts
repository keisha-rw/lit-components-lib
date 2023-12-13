import { themedefault } from '@keisha/design-system-tokens';

export type IconSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl';

/**
 * ICON SIZE
 * xs - 12x12
 * sm - 16x16
 * default - 20x20
 * lg - 24x24
 * xl - 32x32
 * xxl - 40x40
 */

export function getSize(size: IconSize) {
  switch (size) {
    case 'xs':
      return 12;
    case 'sm':
      return 16;
    case 'lg':
      return 24;
    case 'xl':
      return 32;
    case 'xxl':
      return 40;
    default:
      return 20;
  }
}

export const validIconColors = [
  themedefault.SemanticBorderIconDefault,
  themedefault.SemanticBorderInvertedDefault,
  themedefault.SemanticBorderDisabled,
  themedefault.SemanticBorderInfo,
  themedefault.SemanticBorderSuccess,
  themedefault.SemanticBorderWarning,
  themedefault.SemanticBorderError,
  themedefault.SemanticBorderInteractiveDefault,
  themedefault.SemanticBorderInteractiveStrong,
  themedefault.SemanticBorderInteractiveXstrong,
  themedefault.SemanticBorderInteractiveInvertedStrong,
  themedefault.SemanticBorderInteractiveInvertedXstrong,
] as const;

type ArrayValues<T extends readonly unknown[]> = T[number];

export type ValidIconColor = ArrayValues<typeof validIconColors>;

export function isValidColor(color: ValidIconColor | string): boolean {
  const isValid = validIconColors.includes(color as ValidIconColor);

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'The color you passed in is not a valid icon color. Refer to PDS border tokens for valid icon colors.',
    );
  }
  return isValid;
}
