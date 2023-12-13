import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import { required } from '../../decorators/required';
import styles from './heading.scss?inline';

/**
 * @summary This component displays different heading tags in different sizes based on properties
 *
 * @slot default The heading text
 */
@customElement('pds-heading', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
export class PdsHeading extends PdsElement {
  /**
   * Style variant
   * - **display-default** renders a heading with `display-default` type semantic preset
   * - **display-sm** renders a heading with `display-sm` type semantic preset
   * - **headline-lg** renders a heading with `headline-lg` type semantic preset
   * - **headline-default** renders a heading with `headline-default` type semantic preset
   * - **headline-sm** renders a heading with `headline-sm` type semantic preset
   * - **title-lg** renders a heading with `title-lg` type semantic preset
   * - **title-default** renders a heading with `title-default` type semantic preset
   * - **title-sm** renders a heading with `title-sm` type semantic preset
   * - **title-xs** renders a heading with `title-xs` type semantic preset
   * - **label-lg** renders a heading with `label-lg` type semantic preset
   * - **label-default** renders a heading with `label-default` type semantic preset
   * - **label-sm** renders a heading with `label-sm` type semantic preset
   * - **meta-default** renders a heading with `meta-default` type semantic preset
   * - **meta-sm** renders a heading with `meta-sm` type semantic preset
   */
  @property()
  variant:
    | 'display-default'
    | 'display-sm'
    | 'headline-lg'
    | 'headline-default'
    | 'headline-sm'
    | 'title-lg'
    | 'title-default'
    | 'title-sm'
    | 'title-xs'
    | 'label-lg'
    | 'label-default'
    | 'label-sm'
    | 'meta-sm'
    | 'meta-default';

  @property({ type: Boolean })
  inverted?: boolean;

  /**
   * Dynamic tag name for the component
   * This is needed to use proper semantic heading treatments depending on where the banner lives on the page
   * <pds-heading variant="display-default">
   *   <ul>
   *     <li>**h1** renders an `h1` tag</li>
   *     <li>**h2** renders an `h2` tag</li>
   *     <li>**h3** renders an `h3` tag</li>
   *     <li>**h4** renders an `h4` tag</li>
   *     <li>**h5** renders an `h5` tag</li>
   *     <li>**h6** renders an `h6` tag</li>
   *   </ul>
   * </pds-heading>
   */
  @required
  @property()
  headingTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.variant]: !!this.variant,
      inverted: this.inverted === true,
    };
  }

  render() {
    switch (this.headingTag) {
      case 'h2':
        return html`<h2 class=${this.getClass()}>
          <slot></slot>
        </h2> `;
      case 'h3':
        return html`<h3 class=${this.getClass()} part="heading">
          <slot></slot>
        </h3>`;
      case 'h4':
        return html`<h4 class=${this.getClass()}>
          <slot></slot>
        </h4>`;
      case 'h5':
        return html`<h5 class=${this.getClass()}>
          <slot></slot>
        </h5>`;
      case 'h6':
        return html`<h6 class=${this.getClass()}>
          <slot></slot>
        </h6>`;
      default:
        return html`<h1 class=${this.getClass()}>
          <slot></slot>
        </h1>`;
    }
  }
}
