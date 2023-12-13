import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsAvatar } from './avatar';
import createSnapshots from '../../../../test/utils/snapshots';
import '../link/link';

initStoryshots({
  storyKindRegex: /Avatar/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Avatar unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-avatar/>');
  });

  it('is an instance of PdsAvatar', () => {
    expect(element).toBeInstanceOf(PdsAvatar);
  });

  it('inverted Avatar, pds-link as slotted children', async () => {
    // element slotted pds-link without variant
    element = await fixture(
      `<pds-avatar inverted="true">
        <div slot="heading">
          <pds-link>link 1</pds-link>
        </div>
      </pds-avatar>`,
    );

    const pdsLinksWithInvertedVariant = await fixture(
      `<div slot="heading">
          <pds-link variant="inverted">link 1</pds-link>
        </div>`,
    );

    expect(element).toBeInstanceOf(PdsAvatar);
    expect(element.firstElementChild).toEqual(pdsLinksWithInvertedVariant);
  });

  it('inverted Avatar, pds-link as slot heading', async () => {
    // element slotted pds-link without variant
    element = await fixture(
      `<pds-avatar inverted="true">
        <pds-link slot='heading'>link 2</pds-link>
      </pds-avatar>`,
    );

    const pdsLinkWithInvertedVariant = await fixture(
      `<pds-link slot='heading' variant='inverted'>link 2</pds-link>`,
    );

    expect(element).toBeInstanceOf(PdsAvatar);
    expect(element.firstElementChild).toEqual(pdsLinkWithInvertedVariant);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('should console warn when color-bar variant is used and align is provided', async () => {
    const consoleError = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const configuredElement = await fixture(
      '<pds-avatar variant="color-bar" align="center"></pds-avatar>',
    );

    expect(consoleError).toBeCalledTimes(1);

    consoleError.mockRestore();
  });

  it('should console warn when color-bar variant is used and inverted is provided', async () => {
    const consoleError = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const configuredElement = await fixture(
      '<pds-avatar variant="color-bar" inverted></pds-avatar>',
    );

    expect(consoleError).toBeCalledTimes(1);

    consoleError.mockRestore();
  });
});
