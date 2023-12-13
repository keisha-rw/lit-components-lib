import { unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import type {
  ComponentCategory,
  ComponentType,
  ComponentState,
  PdsElement,
} from '../components/PdsElement';

export interface PdsCustomElementOptions {
  category: ComponentCategory;
  type: ComponentType;
  state?: ComponentState;
  styles: {
    [className: string]: string;
  };
}

/**
 * The `pdsCustomElement` decorator is a wrapper around Lit's `customElement` decorator.
 * It additionally sets the `componentName` (by removing `pds-` from the `tagName`),
 * the `componentCategory`, `componentType`, and `styles` which are used
 * for determining the BEM-based class names on the component and for styling
 * the component.
 *
 * @param tagName
 *   The tagName of the custom element.
 *   The tagName should prefixed with `pds-`.
 * @param options.category
 *   'component' | 'layout'
 *   The category is used to determine the class prefix of 'c' or 'l'.
 * @param options.type
 *   'component' | 'recipe'
 *   The type is used to determine if the class name should be prefixed with 'pds-' or not.
 * @param options.state
 *   'stable' | 'beta'
 *   The state of the component, defaults to beta
 * @param options.styles
 *   The imported SCSS styles for the component.
 */
export function pdsCustomElement(
  tagName: string,
  { category, type, state = 'beta', styles }: PdsCustomElementOptions,
) {
  return function pdsElementDecorator(constructor: typeof PdsElement) {
    const processedStyles = unsafeCSS(styles);
    /* eslint-disable no-param-reassign */
    constructor.prototype.componentName = tagName.replace(/^pds-/, '');
    constructor.prototype.componentCategory = category;
    constructor.prototype.componentType = type;
    constructor.prototype.componentState = state;

    if (state === 'beta') {
      // Do not warn on Jest tests (jsdom)
      if (
        typeof window !== 'undefined' &&
        window.navigator &&
        window.navigator.userAgent &&
        window.navigator.userAgent.includes('jsdom')
      ) {
        // do nothing for JSDOM
      } else {
        console.warn(
          `${tagName} is a beta component and may introduce breaking changes into your environment until it becomes stable.`,
        );
      }
    }

    // this decorator seems to have a race condition with lit
    // when it creates the elementStyles from styles,
    // so we need to manually set both
    constructor.styles = processedStyles;
    constructor.elementStyles = (constructor as any).finalizeStyles(
      processedStyles,
    );
    if (customElements.get(tagName) === undefined) {
      customElement(tagName)(constructor);
    }
  };
}
