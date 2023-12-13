import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsBoxButton } from './box-button';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Box button/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('BoxButton unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element =
      await fixture(`<pds-box-button variant="default" href="https://www.google.com" label="Some default content goes here"
      labelVariant="xl"
    ><pds-text-passage slot="description"
    >This description adds additional context</pds-text-passage></pds-box-button/>`);
  });

  it('is an instance of PdsBoxButton', () => {
    expect(element).toBeInstanceOf(PdsBoxButton);
  });

  it('dispatches a custom event on click and gets correct summary', async () => {
    const buttonEl = element.shadowRoot?.querySelector('a');

    const handler = jest.fn();
    element.addEventListener('pds-box-button-click', handler);

    buttonEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual(
        'This description adds additional context',
      );
    });
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('adds the appropriate class when centerContentVertically prop is passed in', async () => {
    const boxButton = element.shadowRoot?.querySelector(
      '.pds-c-box-button',
    ) as HTMLElement;

    expect(
      boxButton?.classList.contains('pds-c-box-button--center-vertically'),
    ).toBe(false);

    const element1 = await fixture(
      `<pds-box-button variant="default" href="https://www.google.com" label="Some default content goes here"
      labelVariant="xl"
      centerContentVertically
    ><pds-text-passage slot="description"
    >This description adds additional context</pds-text-passage></pds-box-button/>`,
    );

    const boxButton1 = element1.shadowRoot?.querySelector(
      '.pds-c-box-button',
    ) as HTMLElement;

    expect(
      boxButton1?.classList.contains('pds-c-box-button--center-vertically'),
    ).toBe(true);
  });
});
