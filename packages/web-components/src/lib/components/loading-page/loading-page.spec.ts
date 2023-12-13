import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { PdsLoadingPage } from './loading-page';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Loading page/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('LoadingPage unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-loading-page/>');
  });

  it('is an instance of PdsLoadingPage', () => {
    expect(element).toBeInstanceOf(PdsLoadingPage);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('Adds the data-show attribute, four seconds after the page loads', async () => {
    const contentEl = element.shadowRoot?.querySelector(
      '.pds-c-loading-page__content',
    );
    expect(contentEl).not.toHaveAttribute('data-show');
    await waitFor(
      () => {
        expect(contentEl).toHaveAttribute('data-show');
      },
      {
        timeout: 4100,
      },
    );
  }, 6000);
});
