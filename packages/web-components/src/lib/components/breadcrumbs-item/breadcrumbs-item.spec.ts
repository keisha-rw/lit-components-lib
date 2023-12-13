import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsBreadcrumbsItem } from './breadcrumbs-item';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Breadcrumbs item/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('BreadcrumbsItem unit tests', () => {
  let element: Element;

  it('is an instance of PdsBreadcrumbsItem', async () => {
    element = await fixture('<pds-breadcrumbs-item/>');
    expect(element).toBeInstanceOf(PdsBreadcrumbsItem);
  });

  it('sets aria-current correctly', async () => {
    element = await fixture('<pds-breadcrumbs-item/>');
    expect(element.shadowRoot?.querySelector('li')?.innerHTML).not.toContain(
      'aria-current',
    );
    element = await fixture('<pds-breadcrumbs-item active/>');
    expect(element.shadowRoot?.querySelector('li')?.innerHTML).toContain(
      'aria-current',
    );
  });

  it('dispatches a custom event on click and gets correct summary', async () => {
    element = await fixture(
      `<pds-breadcrumbs-item href="https://google.com">Breadcrumb 1</pds-breadcrumbs-item`,
    );
    const linkEl = element.shadowRoot?.querySelector('a');

    const handler = jest.fn();
    element.addEventListener('pds-breadcrumbs-item-click', handler);

    linkEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual('Breadcrumb 1');
    });
  });

  it('is accessible', async () => {
    element = await fixture('<pds-breadcrumbs-item/>');
    await assert.isAccessible(element, {
      ignoredRules: ['aria-required-parent'],
    });
  });
});
