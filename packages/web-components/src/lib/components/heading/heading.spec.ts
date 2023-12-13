import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsHeading } from './heading';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Heading/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Heading unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture(
      '<pds-heading headingTag="h1" variant="display-default">Heading</pds-heading>',
    );
  });

  it('is an instance of PdsHeading', () => {
    expect(element).toBeInstanceOf(PdsHeading);
  });

  it('renders a h1 element when the headingTag = h1', async () => {
    element = (await fixture(
      '<pds-heading headingTag="h1" variant="display-default">Heading 1, display-default variant</pds-heading>',
    )) as PdsHeading;

    expect(element).toMatchSnapshot();
  });

  it('renders a h2 element when the headingTag = h2', async () => {
    element =
      await fixture(`<pds-heading headingTag="h2" variant="display-default"
    >Heading 2, display-default variant</pds-heading>`);

    expect(element).toMatchSnapshot();
  });

  it('renders a h3 element when the headingTag = h3', async () => {
    element =
      await fixture(`<pds-heading headingTag="h3" variant="display-default"
    >Heading 3, display-default variant</pds-heading>`);

    expect(element).toMatchSnapshot();
  });

  it('renders a h4 element when the headingTag = h4', async () => {
    element =
      await fixture(`<pds-heading headingTag="h4" variant="display-default"
    >Heading 4, display-default variant</pds-heading>`);

    expect(element).toMatchSnapshot();
  });

  it('renders a h5 element when the headingTag = h5', async () => {
    element =
      await fixture(`<pds-heading headingTag="h5" variant="display-default"
    >Heading 5, display-default variant</pds-heading>`);

    expect(element).toMatchSnapshot();
  });

  it('renders a h6 element when the headingTag = h6', async () => {
    element =
      await fixture(`<pds-heading headingTag="h6" variant="display-default"
    >Heading 6, display-default variant</pds-heading>`);

    expect(element).toMatchSnapshot();
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
