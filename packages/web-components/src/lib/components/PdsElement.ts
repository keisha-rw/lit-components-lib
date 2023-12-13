import { LitElement, isServer } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { state } from 'lit/decorators.js';
import { themedefault } from '@keisha/design-system-tokens';
import {
  getLocale,
  setLocaleFromLangAttr,
} from '../../localization/localization';

export type ComponentCategory = 'component' | 'layout';
export type ComponentType = 'component' | 'recipe';
export type ComponentState = 'stable' | 'beta';
type ClassNames = Record<string, boolean>;

/**
 * A base element.
 */
export abstract class PdsElement extends LitElement {
  /**
   * The component category.
   * @internal
   */
  componentCategory: ComponentCategory;

  /**
   * The component's type.
   * @internal
   */
  componentType: ComponentType;

  /**
   * Optional parameter to define 'stable' or 'beta' components, defaults to 'beta' if undefined.
   * @internal
   */
  componentState: ComponentState;

  /**
   * The name of the component used as the BEM block name.
   * @internal
   */
  componentName: string;

  /**
   * The class map used to derive the class attribute for the component.
   * This will be used by the getClass method.
   * @internal
   */
  get classNames(): ClassNames {
    return {};
  }

  /**
   * The class name prefixed with the appropriate global namespace and class prefix.
   * @internal
   */
  get classNamespaceAndPrefix() {
    const prefixMap = {
      component: 'c',
      layout: 'l',
    };

    if (this.isComponent(this.componentType)) {
      return `pds-${prefixMap[this.componentCategory]}-${this.componentName}`;
    }
    return `${prefixMap[this.componentCategory]}-${this.componentName}`;
  }

  isComponent(type: string) {
    return type === 'component';
  }

  /**
   * Prepends the appropriate namespace to the class: 'pds-' Components or '' Recipes
   * @param key
   */
  getClassNamespace(key: string) {
    return this.isComponent(this.componentType) ? `pds-${key}` : ``;
  }

  /**
   * Prepends the appropriate prefix to the class name as a BEM modifier
   * @param className
   */
  classMod(className: string) {
    return `${this.classNamespaceAndPrefix}--${className}`;
  }

  /**
   * Prepends the appropriate prefix to the class as a BEM element
   * @param className
   */
  classEl(className: string) {
    return `${this.classNamespaceAndPrefix}__${className}`;
  }

  /**
   * Wraps the classNames object in Lit's classMap directive,
   * adding the appropriate prefix to each class name
   * @returns the string to pass to the component's class attribute
   * @example
   *   class Button extends PdsElement {
   *     componentName = 'button';
   *
   *     componentCategory:ComponentCategory = 'component';
   *
   *     componentType: ComponentType = 'component';
   *
   *     \@property()
   *     variant: 'primary' | 'secondary';
   *
   *     get classNames() {
   *       return {
   *         [this.variant]: !!this.variant, // pds-c-button--primary
   *         centered: this.aligned === "centered", // pds-c-button--centered
   *         inverse: this.inverted, // pds-c-button--inverse
   *         "is-active": this.active, // pds-is-active
   *       };
   *     }
   *   }
   *
   *   // Given the above component class, if you render the following
   *   <pds-button variant="primary">Hello world</pds-button>
   *
   *   // then if you call this method, it will return the following (recipe components omit 'pds-')
   *   this.getClass() // 'pds-c-button pds-c-button--primary'
   */
  getClass(): any {
    return classMap(
      Object.keys(this.classNames).reduce(
        (classMapResult, key) => {
          // if the class name starts with "is-", only prepend with global namespace
          // otherwise, prepend the full modifier
          const prefixedClassName = /^is-/.test(key)
            ? this.getClassNamespace(key)
            : this.classMod(key);

          return {
            ...classMapResult,
            [prefixedClassName]: this.classNames[key],
          };
        },
        {
          [this.classNamespaceAndPrefix]: true,
        } as ClassNames,
      ),
    );
  }

  /**
   * Check if a slot is empty
   *
   * @param slotName
   */
  slotEmpty(slotName?: string) {
    if (!isServer) {
      return !this.querySelector(`[slot${slotName ? `="${slotName}"` : ''}]`);
    }

    return true;
  }

  /**
   * Check if a slot is not empty
   *
   * @param slotName
   */
  slotNotEmpty(slotName?: string) {
    if (!this.slotEmpty(slotName) !== false) {
      return !this.slotEmpty(slotName);
    }

    return '';
  }

  /**
   * Get the current locale for language localization
   * @return current locale
   */
  getLocale() {
    getLocale();
  }

  /**
   * Set the locale for language localization
   */
  setLocale() {
    setLocaleFromLangAttr(this);
  }

  /**
   * Clone a lit element
   */
  cloneLitElement(element: Node): HTMLElement {
    // Clone the element to start
    const clone = element.cloneNode(true) as HTMLElement;
    // The React fiber node has the props that the user passed, so we need to grab those to set on the clone
    try {
      const reactFiberNodePropName = Object.getOwnPropertyNames(element).filter(
        (name) => name.startsWith('__reactFiber'),
      )[0];
      const elementDescriptors = Object.getOwnPropertyDescriptors(element);
      const fiberObject = elementDescriptors[reactFiberNodePropName];
      if (fiberObject?.value?.return?.pendingProps) {
        const propsToSetAsAttrs = fiberObject.value.return.pendingProps;
        // We need to filter out some props that we won't set as attributes
        const filteredProps = Object.keys(propsToSetAsAttrs)
          .filter(
            (key) =>
              key !== 'children' &&
              key !== 'suppressHydrationWarning' &&
              !key.startsWith('_'),
          )
          .reduce((obj, key) => {
            return {
              ...obj,
              [key]: propsToSetAsAttrs[key],
            };
          }, {});

        const filteredPropsKeys = Object.keys(filteredProps);
        filteredPropsKeys.forEach((propToSetAsAttr) => {
          // @ts-expect-error fixmelater
          if (filteredProps[propToSetAsAttr] !== false) {
            // @ts-expect-error fixmelater
            clone.setAttribute(propToSetAsAttr, filteredProps[propToSetAsAttr]);
          }
        });
      }
    } catch {
      // Do nothing on error; the clone will be returned in its original state
    }

    return clone;
  }

  /**
   * @internal
   */
  @state()
  responsiveViewportSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  setWindowResizeHandler() {
    if (!isServer && window) {
      const resizeHandler = () => {
        const viewportWidth = window.innerWidth;
        if (viewportWidth) {
          if (viewportWidth < themedefault.BreakpointsPixelSm) {
            this.responsiveViewportSize = 'xs';
          } else if (viewportWidth < themedefault.BreakpointsPixelMd) {
            this.responsiveViewportSize = 'sm';
          } else if (viewportWidth < themedefault.BreakpointsPixelLg) {
            this.responsiveViewportSize = 'md';
          } else if (viewportWidth < themedefault.BreakpointsPixelXl) {
            this.responsiveViewportSize = 'lg';
          } else {
            this.responsiveViewportSize = 'xl';
          }
        }
      };
      resizeHandler();
      window.visualViewport?.addEventListener('resize', resizeHandler);
    }
  }

  /**
   * @internal
   */
  @state()
  private dynamicSlotMarkup: HTMLElement[];

  /**
   * Used to duplicate slot markup if the markup differs between mobile and desktop views.
   */
  duplicateSlotMarkup(slot: HTMLSlotElement) {
    const slotMarkupNodes = slot.assignedNodes();
    // Clone the elements and assign to this.dynamicMarkup whilst removing the slot attribute
    this.dynamicSlotMarkup = slotMarkupNodes.map((node) => {
      let clone = node as HTMLElement;
      if (clone.tagName && clone.tagName.toLowerCase().startsWith('pds-')) {
        clone = this.cloneLitElement(clone);
      } else {
        clone = node.cloneNode(true) as HTMLElement;
      }

      if (clone instanceof HTMLElement) {
        clone.removeAttribute('slot');
        clone.removeAttribute('id');
      }

      return clone;
    });
  }

  /**
   * Returns the duplicated slot markup
   */
  getDynamicSlotMarkup(): Node[] | undefined {
    // Make a clone of the dynamic markup and return it
    if (this.dynamicSlotMarkup) {
      return this.dynamicSlotMarkup.map((node) => {
        const nodeAsElement = node as HTMLElement;
        if (
          nodeAsElement.tagName &&
          nodeAsElement.tagName.toLowerCase().startsWith('pds-')
        ) {
          return this.cloneLitElement(nodeAsElement);
        }

        return node.cloneNode(true);
      });
    }

    return undefined;
  }

  /**
   * Checks if a slotted element is valid for its slot
   */
  handleSlotValidation(e: Event) {
    const slot = e.target as HTMLSlotElement;

    const allowedElements = slot
      .getAttribute('allowed-elements')
      ?.split(',')
      .map((tag) => tag.trim().toUpperCase());

    // eslint-disable-next-line curly
    if (typeof allowedElements === 'undefined') return;

    const assignedElements = slot.assignedElements();

    assignedElements.forEach((node: Element) => {
      if (!this.validateSlottedElements(node, allowedElements)) {
        console.error('Invalid slotted element:', node);
        // Remove the invalid element or handle it as needed
        node.remove();
      }
    });
  }

  /**
   * Checks if an element's tag name is valid, based on a list of valid tag namesubstrings
   */
  validateSlottedElements(element: Element, allowedElements: string[]) {
    return !!(
      element instanceof Element &&
      allowedElements.find((el) => element.tagName.toUpperCase().includes(el))
    );
  }
}
