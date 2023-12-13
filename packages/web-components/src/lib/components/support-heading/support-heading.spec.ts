import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsSupportHeading } from './support-heading';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Support heading/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('SupportHeading unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture(
      '<pds-support-heading headingVariant="meta-default" headingTagName="h2">Title</pds-support-heading>',
    );
  });

  it('is an instance of PdsSupportHeading', () => {
    expect(element).toBeInstanceOf(PdsSupportHeading);
  });

  it('sets aria-level based on the headingTagName prop', async () => {
    expect(
      element.shadowRoot?.querySelector('div[aria-level="2"]'),
    ).toBeTruthy();
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
