import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsErrorPage } from './error-page';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Error page/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('ErrorPage unit tests', () => {
  let element: PdsErrorPage;

  beforeEach(async () => {
    element = await fixture(
      '<pds-error-page errorCode="404" linkText="Test" linkHref="https://www.google.com"/>',
    );
  });

  it('is an instance of PdsErrorPage', () => {
    expect(element).toBeInstanceOf(PdsErrorPage);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('renders correct content for 403 errorCode', async () => {
    const element1 = await fixture(
      '<pds-error-page errorCode="403" linkText="Test" linkHref="https://www.google.com"/>',
    );
    expect(element1).toMatchSnapshot();
  });

  it('renders correct content for 500 errorCode', async () => {
    const element1 = await fixture(
      '<pds-error-page errorCode="500" linkText="Test" linkHref="https://www.google.com" />',
    );
    expect(element1).toMatchSnapshot();
  });

  it('renders correct content for 503 errorCode', async () => {
    const element1 = await fixture(
      '<pds-error-page errorCode="503" linkText="Test" linkHref="https://www.google.com"/>',
    );
    expect(element1).toMatchSnapshot();
  });

  it('Link to have correct size prop value for md/lg viewport', async () => {
    const pdslinkElement = element.shadowRoot?.querySelector(
      'pds-link',
    ) as HTMLElement;
    global.innerWidth = 800;
    global.dispatchEvent(new Event('resize'));
    expect(pdslinkElement.getAttribute('size')).toBe('xl');
  });

  it('Link to have correct size prop value for xs/sm viewport', async () => {
    element.responsiveViewportSize = 'sm';
    element.getLinkSize();
    await element.updateComplete;

    const pdslinkElement = element.shadowRoot?.querySelector(
      'pds-link',
    ) as HTMLElement;
    expect(pdslinkElement.getAttribute('size')).toBe('lg');
  });
});
