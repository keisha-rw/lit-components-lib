import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import userEvent from '@testing-library/user-event';
import { PdsSecondaryNavigationLink } from './secondary-navigation-link';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Secondary navigation link/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../'),
  asyncJest: true,
  test: createSnapshots,
});

describe('SecondaryNavigationLink unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture(
      '<pds-secondary-navigation-link href="#">Link text</pds-secondary-navigation-link>',
    );
  });

  it('is an instance of PdsSecondaryNavigationLink', () => {
    expect(element).toBeInstanceOf(PdsSecondaryNavigationLink);
  });

  it('catches a pds-link-click and converts it to a pds-secondary-navigation-link-click', async () => {
    const mockSecondaryNavClickHandler = jest.fn();

    element.addEventListener(
      'pds-secondary-navigation-link-click',
      mockSecondaryNavClickHandler,
    );
    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Click the secondary nav link
    await userEventWithoutDelay.click(element.shadowRoot?.querySelector('a')!);

    expect(mockSecondaryNavClickHandler).toHaveBeenCalledTimes(1);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
