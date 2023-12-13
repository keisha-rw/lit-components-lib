import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsList } from './list';
import createSnapshots from '../../../../test/utils/snapshots';
import { PdsListItem } from '../list-item/list-item';

initStoryshots({
  storyKindRegex: /List/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('List unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-list/>');
  });

  it('is an instance of PdsList', () => {
    expect(element).toBeInstanceOf(PdsList);
  });

  it('Passes size down to list item', async () => {
    element = await fixture('<pds-list><pds-list-item /></pds-list>');

    const listItemSlot = element.querySelector('pds-list-item') as PdsListItem;
    expect(listItemSlot.getAttribute('size')).toEqual('md');

    element = await fixture('<pds-list size="sm"><pds-list-item /></pds-list>');

    const smListItemSlot = element.querySelector(
      'pds-list-item',
    ) as PdsListItem;
    expect(smListItemSlot.getAttribute('size')).toEqual('sm');
  });

  it('Defaults to md when a bad size is passed', async () => {
    element = await fixture('<pds-list size="sm"><pds-list-item /></pds-list>');

    const listItemSlot = element.querySelector('pds-list-item') as PdsListItem;
    expect(listItemSlot.getAttribute('size')).toEqual('sm');

    element = await fixture('<pds-list size="xl"><pds-list-item /></pds-list>');

    const smListItemSlot = element.querySelector(
      'pds-list-item',
    ) as PdsListItem;
    expect(smListItemSlot.getAttribute('size')).toEqual('md');
  });

  it('should set child variant to "default"', async () => {
    element = await fixture(
      '<pds-list variant="default"><pds-list-item /></pds-list>',
    );
    const listItems = Array.from(
      element.querySelectorAll('pds-list-item'),
    ) as PdsListItem[];
    listItems.forEach((item) => {
      expect(item.variant).toEqual('default');
    });
  });

  it('should set child variant to "description"', async () => {
    element = await fixture(
      '<pds-list variant="description"><pds-list-item /></pds-list>',
    );
    const listItems = Array.from(
      element.querySelectorAll('pds-list-item'),
    ) as PdsListItem[];
    listItems.forEach((item) => {
      expect(item.variant).toEqual('description');
    });
  });

  it('should set child variant to "description-reverse"', async () => {
    element = await fixture(
      '<pds-list variant="description-reverse"><pds-list-item /></pds-list>',
    );
    const listItems = Array.from(
      element.querySelectorAll('pds-list-item'),
    ) as PdsListItem[];
    listItems.forEach((item) => {
      expect(item.variant).toEqual('description-reverse');
    });
  });

  it('is accessible', async () => {
    await assert.isAccessible(element, {
      ignoredRules: ['aria-required-parent'],
    });
  });

  it('populates default slot correctly with type pds-list-item', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    element = await fixture('<pds-list size="sm"><pds-list-item/><pds-list>');
    expect(consoleError).not.toHaveBeenCalled();
    consoleError.mockRestore();
  });

  it('does not populate the default slot with an element other than pds-list-item', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    element = await fixture('<pds-list size="sm"><span/><pds-list>');
    expect(element).toMatchSnapshot();
    expect(consoleError).toHaveBeenCalledTimes(1);
    consoleError.mockRestore();
  });
});
