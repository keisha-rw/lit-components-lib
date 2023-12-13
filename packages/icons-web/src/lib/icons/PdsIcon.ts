import { themedefault } from '@keisha/design-system-tokens';
import { LitElement, PropertyValueMap, isServer } from 'lit';
import { property, state } from 'lit/decorators.js';

export const iconSizes = ['xs', 'sm', 'default', 'lg', 'xl', 'xxl'];

type ArrayValues<T extends readonly unknown[]> = T[number];

export type IconSize = ArrayValues<typeof iconSizes>;

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

export type ValidIconColor = ArrayValues<typeof validIconColors>;

/**
 * A base element.
 */
export abstract class PdsIcon extends LitElement {
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

  isValidColor(color: ValidIconColor | string): boolean {
    const isValid = validIconColors.includes(color as ValidIconColor);

    if (!isValid) {
      // eslint-disable-next-line no-console
      console.error(
        'The color you passed in is not a valid icon color. Refer to PDS border tokens for valid icon colors.',
      );
    }

    return isValid;
  }

  @property({ type: String })
  size: IconSize = 'default';

  @property({ type: String })
  color?: ValidIconColor;

  @state()
  icon: SVGElement;

  abstract createIconElement(): SVGElement;

  setIconAttributes() {
    this.icon = this.createIconElement();
    this.icon.setAttribute('height', this.getSize(this.size).toString());
    this.icon.setAttribute('width', this.getSize(this.size).toString());
    this.icon.setAttribute('aria-hidden', 'true');
    this.icon.setAttribute('display', 'block');

    if (this.color && this.isValidColor(this.color)) {
      this.icon.setAttribute('stroke', this.color);
    }

    console.log('ATTRIBUTES SET');
    console.log(isServer);
    console.log(typeof document);
  }

  connectedCallback() {
    console.log('CALLING ICON CONNECTED CALLBACK');
    console.log(isServer);
    console.log(typeof document);
    super.connectedCallback();
    this.setIconAttributes();
  }

  updated(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    console.log('CALLING ICON UPDATED');
    console.log(isServer);
    console.log(typeof document);
    if (changedProperties.has('color')) {
      if (this.color && this.isValidColor(this.color)) {
        this.icon.setAttribute('stroke', this.color);
      }
    }

    if (changedProperties.has('size')) {
      this.icon.setAttribute('height', this.getSize(this.size).toString());
      this.icon.setAttribute('width', this.getSize(this.size).toString());
    }
  }
}
