import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsTag } from './tag';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Tag/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Tag unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-tag/>');
  });

  it('is an instance of PdsTag', () => {
    expect(element).toBeInstanceOf(PdsTag);
  });

  it('dispatches a custom event on click and gets correct summary', async () => {
    element =
      await fixture(`<pds-tag href="https://www.google.com"><span>Tag name</span></pds-tag>
    `);
    const linkEl = element.shadowRoot?.querySelector('a');

    const handler = jest.fn();
    element.addEventListener('pds-tag-click', handler);

    linkEl?.dispatchEvent(new Event('click'));

    return Promise.resolve().then(() => {
      expect(handler.mock.calls[0][0].detail.summary).toEqual('Tag name');
    });
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
