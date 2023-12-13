import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsPagination } from './pagination';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Pagination/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Pagination unit tests', () => {
  it('is an instance of PdsPagination', async () => {
    const element = await fixture(
      '<pds-pagination ariaLabel="Test paginator"><pds-pagination-item pageNumber="1"/></pds-pagination>',
    );

    expect(element).toBeInstanceOf(PdsPagination);
  });

  it('dispatches a custom event on click and gets correct summary', async () => {
    const element = await fixture(
      '<pds-pagination ariaLabel="Test paginator"><pds-pagination-item pageNumber="1"/></pds-pagination>',
    );
    const buttonEl = element.shadowRoot?.querySelector('button');
    const handler = jest.fn();
    element.addEventListener('pds-pagination-click', handler);

    await buttonEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual('fly-first');
    });
  });

  it('is accessible with buttons', async () => {
    const element = await fixture(
      '<pds-pagination ariaLabel="Test paginator"><pds-pagination-item pageNumber="1"/></pds-pagination>',
    );

    await assert.isAccessible(element);
  });

  it('generates anchor tags if href is passed in', async () => {
    const element = await fixture(
      '<pds-pagination ariaLabel="Test paginator" flyfirsthref="http://www.google.com/first" stepbackwardhref="http://www.google.com/backward" stepforwardhref="http://www.google.com/forward" flylasthref="http://www.google.com/last"><pds-pagination-item pageNumber="1"/></pds-pagination>',
    );

    const constArrowAnchors = element.shadowRoot?.querySelectorAll(
      'a.pds-c-pagination__button',
    );

    expect(constArrowAnchors).toHaveLength(4);
  });

  it('generates anchor tags if href is passed in with disabled backward and forward arrows', async () => {
    const element = await fixture(
      '<pds-pagination ariaLabel="Test paginator" forwardDisabled backwardDisabled flyfirsthref="http://www.google.com/first" stepbackwardhref="http://www.google.com/backward" stepforwardhref="http://www.google.com/forward" flylasthref="http://www.google.com/last"><pds-pagination-item pageNumber="1"/></pds-pagination>',
    );

    const constArrowAnchors = element.shadowRoot?.querySelectorAll(
      'a.pds-c-pagination__button',
    );

    expect(constArrowAnchors).toHaveLength(4);
  });

  it('is accessible with anchors', async () => {
    const element = await fixture(
      '<pds-pagination ariaLabel="Test paginator" flyfirsthref="http://www.google.com/first" stepbackwardhref="http://www.google.com/backward" stepforwardhref="http://www.google.com/forward" flylasthref="http://www.google.com/last"><pds-pagination-item pageNumber="1"/></pds-pagination>',
    );

    await assert.isAccessible(element);
  });

  it('skips flyers if hideFlyers is passed in to anchor tags', async () => {
    const element = await fixture(
      '<pds-pagination ariaLabel="Test paginator" flyfirsthref="http://www.google.com/first" stepbackwardhref="http://www.google.com/backward" stepforwardhref="http://www.google.com/forward" flylasthref="http://www.google.com/last" hideFlyers><pds-pagination-item pageNumber="1"/></pds-pagination>',
    );

    const constArrowAnchors = element.shadowRoot?.querySelectorAll(
      'a.pds-c-pagination__button',
    );

    expect(constArrowAnchors).toHaveLength(2);
  });

  it('skips flyers if hideFlyers is passed in', async () => {
    const element = await fixture(
      '<pds-pagination ariaLabel="Test paginator" hideFlyers><pds-pagination-item pageNumber="1"/></pds-pagination>',
    );

    const constArrows = element.shadowRoot?.querySelectorAll(
      'button.pds-c-pagination__button',
    );

    expect(constArrows).toHaveLength(2);
  });

  it('passes prop down to single pagination item', async () => {
    const element = (await fixture(
      '<pds-pagination ariaLabel="Test paginator" variant="no-arrows"><pds-pagination-item pageNumber="1"/></pds-pagination>',
    )) as PdsPagination;

    const paginationItem = element.shadowRoot
      ?.querySelector('slot')
      ?.assignedNodes()[0] as HTMLElement;

    expect(paginationItem?.getAttribute('variant')).toBe('no-arrows-one-item');
  });

  it('passes prop down to multiple pagination items', async () => {
    const element = (await fixture(
      '<pds-pagination ariaLabel="Test paginator" variant="no-arrows"><pds-pagination-item pageNumber="1"></pds-pagination-item><pds-pagination-item pageNumber="2"></pds-pagination-item></pds-pagination>',
    )) as PdsPagination;

    const paginationItemOne = element.shadowRoot
      ?.querySelector('slot')
      ?.assignedNodes()[0] as HTMLElement;

    const paginationItemTwo = element.shadowRoot
      ?.querySelector('slot')
      ?.assignedNodes()[1] as HTMLElement;

    expect(paginationItemOne?.getAttribute('variant')).toBe('no-arrows-first');
    expect(paginationItemTwo?.getAttribute('variant')).toBe('no-arrows-last');
  });

  it('removes the slot in the shadow if variant is arrows', async () => {
    const element = (await fixture(
      '<pds-pagination ariaLabel="Test paginator" variant="arrows"><pds-pagination-item pageNumber="1"></pds-pagination-item><pds-pagination-item pageNumber="2"></pds-pagination-item></pds-pagination>',
    )) as PdsPagination;

    const slotElement = element.shadowRoot?.querySelector(
      'slot',
    ) as HTMLElement;

    expect(slotElement).toBeFalsy();
  });

  it('if no aria-label is passed in, it should be auto-created', async () => {
    const element = await fixture(
      '<pds-pagination><pds-pagination-item pageNumber="1"/></pds-pagination>',
    );
    const label = element.shadowRoot
      ?.querySelector('.pds-c-pagination')
      ?.getAttribute('aria-label');
    expect(label).toBe('pagination');
  });

  it('if language is Spanish, the aria-label should be in Spanish', async () => {
    const spanishElement = await fixture(
      '<pds-pagination lang="es"><pds-pagination-item pageNumber="1"/></pds-pagination>',
    );
    const label = spanishElement.shadowRoot
      ?.querySelector('.pds-c-pagination')
      ?.getAttribute('aria-label');
    expect(label).toBe('paginación');
  });
});
