import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsLogoutPage } from './logout-page';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Logout page/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('LogoutPage unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-logout-page/>');
  });

  it('is an instance of PdsLogoutPage', () => {
    expect(element).toBeInstanceOf(PdsLogoutPage);
  });

  it('provides the correct text for expired variant', async () => {
    const expiredElement = (await fixture(
      '<pds-logout-page variant="expired"/>',
    )) as PdsLogoutPage;
    expect(expiredElement.getLogoutHeadline()).toBe(
      'Your session has expired.',
    );
    expect(expiredElement.getLogoutText()).toBe(
      "To keep your account secure, we've logged you out.",
    );
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
