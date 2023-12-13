import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsPrimaryNavigationContainer } from './primary-navigation-container';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Primary navigation container/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Primary navigation container unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-primary-navigation-container/>');
  });

  it('is an instance of PdsPrimaryNavigationContainer', () => {
    expect(element).toBeInstanceOf(PdsPrimaryNavigationContainer);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('should stopPropation of parents event on inner nav container', async () => {
    const innerContainer = element.shadowRoot?.querySelector(
      '.pds-c-primary-navigation-container__inner',
    ) as HTMLElement;

    const handler = (e: Event) => {
      e.stopPropagation();
    };
    element.addEventListener('click', handler);

    const clickEvent = new Event('click');
    clickEvent.stopPropagation = jest.fn();

    await innerContainer?.dispatchEvent(clickEvent);

    return Promise.resolve().then(() => {
      expect(clickEvent.stopPropagation).toBeCalled();
    });
  });
});
