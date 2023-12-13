import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './support-heading.scss?inline';
import { required } from '../../decorators/required';
import '../heading/heading';

@customElement('pds-support-heading', {
  category: 'component',
  type: 'component',
  state: 'stable',
  styles,
})
/**
 * @summary A support heading
 *
 * @slot default The text of the heading
 */
export class PdsSupportHeading extends PdsElement {
  /**
   * Heading variant
   * - **meta-default** renders a <pds-heading> with meta text variant capitalized
   * - **meta-sm** renders a <pds-heading> with smaller meta text variant capitalized
   * - **headline-default** renders a <pds-heading> sentence case and bold with blue border and light blue offset background
   */
  @property()
  headingVariant: 'meta-default' | 'meta-sm' | 'headline-default' =
    'meta-default';

  @property({ type: Boolean })
  inverted: boolean = false;

  @required
  @property()
  headingTagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /**
   * @internal
   */
  get classNames() {
    return {
      [this.headingVariant]: !!this.headingVariant,
      inverted: this.inverted,
    };
  }

  headingLevel() {
    return this.headingTagName.replace('h', '');
  }

  render() {
    return html`<div
      class=${this.getClass()}
      role="heading"
      aria-level="${this.headingLevel()}"
    >
      <div class=${this.classEl('body')}>
        <pds-heading
          headingTag=${this.headingTagName}
          variant=${this.headingVariant}
          ><slot></slot
        ></pds-heading>
      </div>
    </div>`;
  }
}
