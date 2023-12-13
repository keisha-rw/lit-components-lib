import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import '@testing-library/jest-dom';
import { assert, fixture } from '@open-wc/testing';
import { PdsFooterNavItem } from './footer-nav-item';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Footer nav item/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('FooterNavItem unit tests', () => {
  let element: PdsFooterNavItem;

  beforeEach(async () => {
    element = (await fixture(`<pds-footer-nav-item label="Other sites">
    <pds-list>
      <pds-list-item
        ><pds-link
          variant="inverted"
          href="#"
          >For dental providers</pds-link
        ></pds-list-item
      >
      <pds-list-item
        ><pds-link
          variant="inverted"
          href="#"
          >For financial professionals</pds-link
        ></pds-list-item
      >
      <pds-list-item
        ><pds-link
          variant="inverted"
          href="#"
          >Company Co Asset Management</pds-link
        ></pds-list-item
      >
    </pds-list>
  </pds-footer-nav-item>`)) as PdsFooterNavItem;
  });

  it('is an instance of PdsFooterNavItem', () => {
    expect(element).toBeInstanceOf(PdsFooterNavItem);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element, {
      ignoredRules: ['landmark-unique'],
    });
  });

  it('renders correctly at desktop view', async () => {
    element.responsiveViewportSize = 'md';
    await element.updateComplete;

    const heading = element.shadowRoot?.querySelector('pds-heading');

    expect(heading?.shadowRoot?.querySelector('h3')).toBeTruthy();
    expect(heading).not.toHaveAttribute('slot');
  });

  it('renders correctly at mobile view', async () => {
    element.responsiveViewportSize = 'xs';
    await element.updateComplete;

    const heading = element.shadowRoot?.querySelector('pds-heading');

    expect(heading?.shadowRoot?.querySelector('h2')).toBeTruthy();
    expect(heading).toHaveAttribute('slot');
  });
});
