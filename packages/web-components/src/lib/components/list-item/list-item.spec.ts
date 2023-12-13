import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsListItem } from './list-item';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /List item/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('ListItem unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-list-item/>');
  });

  it('is an instance of PdsListItem', () => {
    expect(element).toBeInstanceOf(PdsListItem);
  });

  it('has icon wrapper', async () => {
    const elementWithWrapper = await fixture(
      '<pds-list-item><span slot="icon">Icon</span></pds-list-item>',
    );
    expect(elementWithWrapper).toBeInstanceOf(PdsListItem);
  });

  it('Passes size down to the icon', async () => {
    element = await fixture(
      '<pds-list-item><pds-icon-check slot="icon" /><pds-list-item>',
    );

    const iconSlot = element.querySelector('pds-icon-check') as HTMLElement;
    expect(iconSlot.getAttribute('size')).toEqual('md');

    element = await fixture(
      '<pds-list-item size="sm"><pds-icon-check slot="icon" /><pds-list-item>',
    );

    const smIconSlot = element.querySelector('pds-icon-check') as HTMLElement;
    expect(smIconSlot.getAttribute('size')).toEqual('sm');
  });

  it('Does not pass size down to the icon when bad value', async () => {
    element = await fixture(
      '<pds-list-item size="sm"><pds-icon-check slot="icon" /><pds-list-item>',
    );

    const iconSlot = element.querySelector('pds-icon-check') as HTMLElement;
    expect(iconSlot.getAttribute('size')).toEqual('sm');

    element = await fixture(
      '<pds-list-item size="xl"><pds-icon-check slot="icon" /><pds-list-item>',
    );

    const smIconSlot = element.querySelector('pds-icon-check') as HTMLElement;
    expect(smIconSlot.getAttribute('size')).toBeNull();
  });

  it('Checks if appropriate classes are getting added for description variant', async () => {
    const configuredElement = (await fixture(
      '<pds-list-item variant="description"><span slot="description">List item description</span><span slot="description-term">List item label</span></pds-list-item>',
    )) as PdsListItem;

    expect(
      configuredElement.shadowRoot?.querySelector(
        '.pds-c-list-item__term, .pds-c-list-item__details',
      ),
    ).toBeTruthy();
  });

  it('Checks if appropriate classes are getting added for description-reverse variant', async () => {
    const configuredElement = (await fixture(
      '<pds-list-item variant="description-reverse"><span slot="description">List item description</span><span slot="description-term">List item label</span></pds-list-item>',
    )) as PdsListItem;

    expect(
      configuredElement.shadowRoot?.querySelector(
        '.pds-c-list-item__term-reverse, .pds-c-list-item__details-reverse',
      ),
    ).toBeTruthy();
  });

  it('is accessible', async () => {
    await assert.isAccessible(element, {
      ignoredRules: ['aria-required-parent'],
    });
  });
});
