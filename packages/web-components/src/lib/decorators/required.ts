import { nothing } from 'lit';

/**
 * The `@required` decorator can be used to indicate that
 * a property is required. When used, if that property
 * is not defined, then the component will not render
 * and will produce an error message in the console.
 * Additionally, the name of the property will be added
 * to `pdsRequiredProperties` on the element.
 *
 * The `@required` decorator should be used in conjunction
 * with the `@property()` decorator.
 */
export function required(target: any, propertyKey: string) {
  const originalRender = target.render;

  // eslint-disable-next-line no-param-reassign
  target.pdsRequiredProperties ??= new Set();
  target.pdsRequiredProperties.add(propertyKey);

  // eslint-disable-next-line no-param-reassign
  target.render = function render() {
    if (typeof this[propertyKey] === 'undefined') {
      console.error(
        '"%s" is a required property of <%s /> but is undefined on: %o',
        propertyKey,
        this.tagName.toLowerCase(),
      );

      // If a required prop is not passed, the element should not render
      return nothing;
    }

    return originalRender.call(this);
  };
}
