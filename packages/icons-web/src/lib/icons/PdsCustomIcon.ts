import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export type IconSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl';

/**
 * A base element.
 */
export abstract class PdsCustomIcon extends LitElement {
  /**
   * ICON SIZE
   * xs - 12x12
   * sm - 16x16
   * default - 20x20
   * lg - 24x24
   * xl - 32x32
   * xxl - 40x40
   */
  getSize(size: IconSize): Number {
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

  @property({ type: String })
  size: IconSize = 'default';

  @property({ type: String })
  color = 'currentColor';
}
