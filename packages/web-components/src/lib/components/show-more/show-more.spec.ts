import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsShowMore } from './show-more';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Show more/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('ShowMore unit tests', () => {
  let element: PdsShowMore;

  beforeEach(async () => {
    element = await fixture(
      '<pds-show-more variant="default"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenea pharetra magna ac. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Tristique sollicitudin nibh sit amet commodo. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Id porta nibh venenatis cras sed felis eget. Fermentum iaculis eu non diam phasellus vestibulum. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Integer vitae justo eget magna fermentum iaculis eu non. Est ante in nibh mauris cursus mattis. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Sed blandit libero volutpat sed cras ornare arcu. Ut placerat orci nulla pellentesque. Tempus imperdiet nulla malesuada pellentesque elit eget. Euismod lacinia at quis risus sed vulputate. Lectus quam id leo in vitae. Id porta nibh venenatis cras sed felis. Risus pretium quam vulputate dignissim suspendisse in est. Tellus in metus vulputate eu. Quam id leo in vitae turpis massa sed. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Sit amet nisl purus in mollis nunc. Sed velit dignissim sodales ut eu sem integer.</p></pds-show-more>',
    );
  });

  it('is an instance of PdsShowMore', () => {
    expect(element).toBeInstanceOf(PdsShowMore);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('should open the show more content when open is false', () => {
    element.open = false;
    element.toggle();
    expect(element.open).toBe(true);
  });

  it('should dispatch a "show-more-open" event when open is false', () => {
    element.open = false;
    const dispatchEventSpy = jest.spyOn(element, 'dispatchEvent');
    const customEvent = new Event('pds-show-more-open', {
      bubbles: true,
      composed: true,
    });
    element.toggle();
    expect(dispatchEventSpy).toHaveBeenCalledWith(customEvent);
  });

  it('should close the show more content when open is true', () => {
    element.open = true;
    element.toggle();
    expect(element.open).toBe(false);
  });

  it('should dispatch a "show-more-close" event when open is true', () => {
    element.open = true;
    const dispatchEventSpy = jest.spyOn(element, 'dispatchEvent');
    const customEvent = new Event('pds-show-more-close', {
      bubbles: true,
      composed: true,
    });
    element.toggle();
    expect(dispatchEventSpy).toHaveBeenCalledWith(customEvent);
  });

  it('should call toggle method when handleKeyDown() is called with Enter key', () => {
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    jest.spyOn(element, 'toggle');
    element.handleKeyDown(event);
    expect(element.toggle).toHaveBeenCalled();
  });

  it('should toggle when Space key is pressed', () => {
    const event = new KeyboardEvent('keydown', { key: ' ' });
    jest.spyOn(element, 'toggle');
    element.handleKeyDown(event);
    expect(element.toggle).toHaveBeenCalled();
  });

  it('should animate the expand of content', () => {
    jest.useFakeTimers();
    element.animateExpand();
    expect(element.content.style.height).toBe('0px');
    expect(element.content.style.overflow).toBe('hidden');
    jest.runAllTimers();
    expect(element.content.style.height).toStrictEqual('');
    jest.useRealTimers();
  });

  it('should animate the collapse of content', () => {
    jest.useFakeTimers();
    element.animateCollapse();
    expect(element.content.style.overflow).toBe('hidden');
    expect(element.content.style.height).toBe(
      `${element.content.scrollHeight}px`,
    );
    jest.runAllTimers();
    expect(element.content.style.height).toBe('0px');
    jest.useRealTimers();
  });

  describe('render()', () => {
    it('render the component with inverted variant', async () => {
      element = await fixture(
        '<pds-show-more variant="inverted"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenea pharetra magna ac. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Tristique sollicitudin nibh sit amet commodo. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Id porta nibh venenatis cras sed felis eget. Fermentum iaculis eu non diam phasellus vestibulum. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Integer vitae justo eget magna fermentum iaculis eu non. Est ante in nibh mauris cursus mattis. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Sed blandit libero volutpat sed cras ornare arcu. Ut placerat orci nulla pellentesque. Tempus imperdiet nulla malesuada pellentesque elit eget. Euismod lacinia at quis risus sed vulputate. Lectus quam id leo in vitae. Id porta nibh venenatis cras sed felis. Risus pretium quam vulputate dignissim suspendisse in est. Tellus in metus vulputate eu. Quam id leo in vitae turpis massa sed. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Sit amet nisl purus in mollis nunc. Sed velit dignissim sodales ut eu sem integer.</p></pds-show-more>',
      );
      expect(element.variant).toEqual('inverted');
    });
  });
});
