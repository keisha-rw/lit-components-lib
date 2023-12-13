import { fixture } from '@open-wc/testing';
import { html } from 'lit';
// eslint-disable-next-line import/extensions
import { property, customElement } from 'lit/decorators.js';
import {
  ComponentType,
  ComponentCategory,
  PdsElement,
} from '../components/PdsElement';
import { required } from './required';

describe('The required decorator', () => {
  @customElement('pds-test')
  class TestElement extends PdsElement {
    componentName = 'test';

    componentCategory: ComponentCategory = 'component';

    componentType: ComponentType = 'component';

    @required
    @property()
    variant: string;

    render() {
      return html`<div class=${this.getClass()}>test</div>`;
    }
  }
  it('should render as expected when the required property is set', async () => {
    const element: TestElement = await fixture(
      '<pds-test variant="whatever"></pds-test>',
    );

    expect(element.shadowRoot?.querySelector('div')).toBeTruthy();
  });

  it('should console log an error and not render the element if the required property is not set', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const element: TestElement = await fixture('<pds-test></pds-test>');

    expect(consoleError).toBeCalledTimes(1);
    expect(element.shadowRoot?.querySelector('div')).toBeNull();

    consoleError.mockRestore();
  });
});
