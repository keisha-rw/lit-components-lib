import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsFooterNav } from './footer-nav';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Footer nav/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('FooterNav unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture(`<pds-footer-nav variant="default" behavior="3col"
    ><pds-footer-nav-item
      label="Our company"
      items='[
        {
          "title": "About us",
          "href": "#"
        },
        {
          "title": "Investor relations",
          "href": "#"
        },
        {
          "title": "News room",
          "href": "#"
        },
        {
          "title": "Sustainability",
          "href": "#"
        },
        {
          "title": "Insights",
          "href": "#"
        }
      ]'
    ></pds-footer-nav-item><pds-footer-nav-item
      label="We're hiring"
      items='[
        {
          "title": "Careers",
          "href": "#"
        },
        {
          "title": "Global jobs",
          "href": "#"
        },
        {
          "title": "Financial professional opportunities",
          "href": "#"
        },
        {
          "title": "Internships",
          "href": "#"
        },
        {
          "title": "Recent graduates",
          "href": "#",
        },
      ]'
    ></pds-footer-nav-item><pds-footer-nav-item
      label="Other sites"
      items='[
        {
          "title": "For dental providers",
          "href": "#",
        },
        {
          "title": "For financial professionals",
          "href": "#",
        },
        {
          "title": "Company Co Asset Management",
          "href": "#",
        }
      ]'
    ></pds-footer-nav-item></pds-footer-nav>`);
  });

  it('is an instance of PdsFooterNav', () => {
    expect(element).toBeInstanceOf(PdsFooterNav);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element, {
      ignoredRules: ['landmark-unique'],
    });
  });
});
