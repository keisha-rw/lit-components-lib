import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsFooterContactLink } from './footer-contact-link';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Footer contact link/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Footer contact link unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-footer-contact-link linkCategory="fax"/>');
  });

  it('is an instance of PdsFooterContactLink', () => {
    expect(element).toBeInstanceOf(PdsFooterContactLink);
  });

  it('is accessible', async () => {
    // axe testing library has trouble seeing the text with how it's populated, but it reads fine with a screenreader
    await assert.isAccessible(element, {
      ignoredRules: ['link-name'],
    });
  });

  it('populates the custom help link', async () => {
    element = await fixture(
      '<pds-footer-contact-link href="www.google.com/help" ariaLabel="Link to page with helpful information" linkCategory="help">Need help?</pds-footer-contact-link>',
    );
    const helpIcon = element.shadowRoot?.querySelector('pds-icon-help-circle');
    expect(helpIcon).toBeTruthy();
    expect(element.textContent).toBe('Need help?');
  });

  it('if link category is phone, it should not print the help-circle icon and should automatically have Company Co phone number populated', async () => {
    element = await fixture(
      '<pds-footer-contact-link variant="inverted" linkCategory="phone"></pds-footer-contact-link>',
    );
    const helpIcon = element.shadowRoot?.querySelector('.pds-icon-help-circle');
    expect(helpIcon).toBeFalsy();
    expect(element.shadowRoot?.querySelector('pds-link')?.textContent).toBe(
      '800-986-3343',
    );
  });

  it('returns nothing and logs an error if there is no linkCategory passed in', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const configuredElement = await fixture('<pds-footer-contact-link />');

    const footerContactLink = configuredElement.shadowRoot?.querySelector(
      '.pds-c-footer-contact-link',
    );

    expect(footerContactLink).toBeFalsy();
    expect(console.error).toHaveBeenCalledTimes(1);
    consoleError.mockRestore();
  });
});
