import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsBreadcrumbs } from './breadcrumbs';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Breadcrumbs/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Breadcrumbs unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-breadcrumbs />');
  });

  it('is an instance of PdsBreadcrumbs', () => {
    expect(element).toBeInstanceOf(PdsBreadcrumbs);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('if custom aria-label is passed in, it should populate in the dom', async () => {
    const customAriaLabel = await fixture(
      `<pds-breadcrumbs ariaLabel="test">
      <pds-breadcrumbs-item href="https://google.com"
        >Breadcrumb 1</pds-breadcrumbs-item
      ></pds-breadcrumbs>`,
    );
    const label = customAriaLabel.shadowRoot
      ?.querySelector('.pds-c-breadcrumbs')
      ?.getAttribute('aria-label');
    expect(label).toBe('test');
  });

  it('if no aria-label is passed in, it should be auto-created', async () => {
    const label = element.shadowRoot
      ?.querySelector('.pds-c-breadcrumbs')
      ?.getAttribute('aria-label');
    expect(label).toBe('breadcrumbs');
  });

  it('if language is Spanish, the aria-label should be in Spanish', async () => {
    const spanishBreadcrumbs = await fixture(`<pds-breadcrumbs lang="es">
    <pds-breadcrumbs-item href="https://google.com"
      >Breadcrumb 1</pds-breadcrumbs-item
    ></pds-breadcrumbs>`);
    const label = spanishBreadcrumbs.shadowRoot
      ?.querySelector('.pds-c-breadcrumbs')
      ?.getAttribute('aria-label');
    expect(label).toBe('ayuda a la navegación');
  });
});
