import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsPaginationItem } from './pagination-item';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Pagination item/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('PaginationItem unit tests', () => {
  it('is an instance of PdsPaginationItem', async () => {
    const element = await fixture('<pds-pagination-item pageNumber="5" />');

    expect(element).toBeInstanceOf(PdsPaginationItem);
  });

  it('dispatches a custom click event when the button is clicked', async () => {
    const element = await fixture('<pds-pagination-item pageNumber="5" />');
    const buttonEl = element.shadowRoot?.querySelector('button');

    const handler = jest.fn();
    element.addEventListener('pds-pagination-item-click', handler);

    await buttonEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual('5');
    });
  });

  it('is accessible', async () => {
    const element = await fixture('<pds-pagination-item pageNumber="5" />');

    await assert.isAccessible(element, {
      ignoredRules: ['aria-required-parent'],
    });
  });

  it('generates anchor tag if href is passed in', async () => {
    const element = await fixture(
      '<pds-pagination-item href="https://www.google.com" pageNumber="5" />',
    );

    const arrowAnchors = element.shadowRoot?.querySelectorAll(
      'a.pds-c-pagination-item__button',
    );

    expect(arrowAnchors).toHaveLength(1);
  });

  it('is accessible with anchors', async () => {
    const element = await fixture(
      '<pds-pagination-item href="https://www.google.com" pageNumber="5" />',
    );

    await assert.isAccessible(element, {
      ignoredRules: ['aria-required-parent'],
    });
  });

  it('generates an active button', async () => {
    const element = await fixture(
      '<pds-pagination-item pageNumber="2" active />',
    );

    const activeButton = element.shadowRoot?.querySelectorAll(
      'button.pds-c-pagination-item--active',
    );

    expect(activeButton).toHaveLength(1);
  });

  it('generates an active href button', async () => {
    const element = await fixture(
      '<pds-pagination-item href="https://www.google.com" pageNumber="5" active />',
    );

    const activeButton = element.shadowRoot?.querySelectorAll(
      'a.pds-c-pagination-item--active',
    );

    expect(activeButton).toHaveLength(1);
  });

  it('if language is Spanish, the aria-label should be in Spanish', async () => {
    const element = await fixture(
      '<pds-pagination-item lang="es" href="https://www.google.com" pageNumber="5" active />',
    );
    const label = element.shadowRoot
      ?.querySelector('.pds-c-pagination-item__button')
      ?.getAttribute('aria-label');
    expect(label).toContain('ir a la página');
  });
});
